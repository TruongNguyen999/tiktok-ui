import { VideoContainer, WrapperContainer } from "./Home.styled";
import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const videoRefs = useRef([]);

  // Hàm tải thêm video từ API
  const fetchVideos = async (pageNum) => {
    try {
      const response = await fetch(`https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=2`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) throw new Error(`Lỗi khi gọi API: ${response.status}`);
      const data = await response.json();
      if (data.length === 0) setHasMore(false); // Không còn video để tải
      return data.data;
    } catch (err) {
      setError(err.message);
      return [];
    }
  };

  // Tải video ban đầu
  useEffect(() => {
    fetchVideos(1).then((data) => setVideos(data));
  }, []);

  // Tự động phát video trong khung nhìn
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play();
            video.dataset.active = "true"; // Đánh dấu video đang phát
          } else {
            video.pause();
            video.dataset.active = "false";
          }
        });
      },
      { threshold: 0.5 } // Phát khi 50% video nằm trong khung nhìn
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]);

  // Xử lý khi video kết thúc
  const handleVideoEnded = (index) => {
    if (index < videos.length - 1) {
      // Cuộn đến video tiếp theo
      videoRefs.current[index + 1]?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Tải thêm video khi cuộn
  const loadMoreVideos = async () => {
    const newVideos = await fetchVideos(page + 1);
    setVideos((prev) => [...prev, ...newVideos]);
    setPage(page + 1);
  };

  console.log(videos);
  

  return (
    <WrapperContainer>
      <InfiniteScroll
        dataLength={videos.length}
        next={loadMoreVideos}
        hasMore={hasMore}
        loader={<h4>Đang tải video...</h4>}
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "auto",
          height: "100vh",
        }}
      >
        {error ? (
          <div>Lỗi: {error}</div>
        ) : videos.length > 0 ? (
          videos.map((video, index) => (
            <VideoContainer key={video.id} $active={video.active || false}>
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={video.file_url}
                autoPlay={true}
                preload="auto"
                controls
                width="300"
                onEnded={() => handleVideoEnded(index)}
              />
              <p>{video.text}</p>
              <p>Lượt thích: {video.likes_count}</p>
              <p>Bình luận: {video.comments_count}</p>
              <p>Chia sẻ: {video.shares_count}</p>
            </VideoContainer>
          ))
        ) : (
          "Đang tải video..."
        )}
      </InfiniteScroll>
    </WrapperContainer>
  );
};

export default Home;
