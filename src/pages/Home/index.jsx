import {
  BtnAction,
  Video,
  VideoActions,
  VideoContainer,
  WrapperContainer,
} from "./Home.styled";
import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { DISPATCH_GET_VIDEO_LIST } from "../../redux/types";
import {
  CommentIcon,
  LikeIcon,
  PanIcon,
  PlusIcon,
  ShareIcon,
} from "../../assets";

const Home = () => {
  const dispatch = useDispatch();
  const { videos, error } = useSelector((state) => state);

  // const [videos, setVideos] = useState([]);
  // const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const videoRefs = useRef([]);
  const DOM_loader = useRef(null);

  // Hàm tải thêm video từ API
  const fetchVideos = async (pageNum) => {
    dispatch({
      type: DISPATCH_GET_VIDEO_LIST,
      payload: {
        type: "for-you",
        page: pageNum,
      },
    });
  };

  // Tải video ban đầu
  useEffect(() => {
    fetchVideos(1);

    const handleScroll = () => {
      const scrollableDiv = document.getElementById("scrollableDiv");
      console.log(scrollableDiv);

      if (scrollableDiv) {
        const isBottom =
          scrollableDiv.scrollTop + scrollableDiv.clientHeight >=
          scrollableDiv.scrollHeight * 0.95;
        // loadMoreVideos();

        console.log(isBottom);
      }
    };

    const scrollableDiv = document.getElementById("scrollableDiv");
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      dispatch({ type: "CLEAR_ERROR" });
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Tự động phát video trong khung nhìn
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch((err) => {
              console.log("Không thể phát video:", err.message);
            });
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
  const loadMoreVideos = () => {
    fetchVideos(page + 1);
    // setVideos((prev) => [...prev, ...newVideos]);
    setPage(page + 1);
  };

  return (
    <WrapperContainer>
      <InfiniteScroll
        dataLength={videos.length}
        next={() => {
          console.log("Truong log next");
        }}
        id="scrollableDiv"
        hasMore={true}
        loader={<h4>Đang tải video...</h4>}
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "auto",
          height: "100vh",
          scrollbarWidth: 'none',
          paddingRight: '185px',
        }}
      >
        {error?.message ? (
          <div>Lỗi: {error.message}</div>
        ) : videos.length > 0 ? (
          videos.map((video, index) => (
            <VideoContainer key={"video" + video.id}>

              {/* video */}
              <Video>
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.file_url}
                  loading="lazy"
                  autoPlay={true}
                  preload="auto"
                  controls
                  onEnded={() => handleVideoEnded(index)}
                />
              </Video>
              
              {/* action */}
              <VideoActions>
                
                {/* imgage user */}
                <BtnAction $mb>
                  <img src={video.user.avatar} alt="avatar" loading="lazy" />
                  <span className="plus">
                    <PlusIcon />
                  </span>
                </BtnAction>

                {/* action like */}
                <BtnAction>
                  <span>
                    <LikeIcon />
                  </span>
                  <strong>{video.likes_count}</strong>
                </BtnAction>

                {/* action comment */}
                <BtnAction>
                  <span>
                    <CommentIcon />
                  </span>
                  <strong>{video.comments_count}</strong>
                </BtnAction>

                {/* action pan */}
                <BtnAction>
                  <span>
                    <PanIcon />
                  </span>
                  <strong>{234}</strong>
                </BtnAction>

                {/* action share */}
                <BtnAction>
                  <span>
                    <ShareIcon />
                  </span>
                  <strong>{video.shares_count}</strong>
                </BtnAction>

                {/* action tag */}
                <BtnAction $mt>
                  <img src={video.user.avatar} alt="avatar" loading="lazy" />
                </BtnAction>

              </VideoActions>
            </VideoContainer>
          ))
        ) : (
          "Đang tải video..."
        )}

        <div key={"-1"} ref={DOM_loader} />
      </InfiniteScroll>
    </WrapperContainer>
  );
};

export default Home;
