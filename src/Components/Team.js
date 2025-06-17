import React from "react";
import styled from "styled-components";
import { teamImg } from "../config.js/data";
import { BiRightArrowAlt, BiLeftArrowAlt } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";

//import swiper core and require module
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//import Swper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Team = () => {
  return (
    <Wrapper className="team-section" id="team">
      <div className="svg">
        
        </div>
    </Wrapper>
  );
};

export default Team;

const Wrapper = styled.section`
  position: relative;
  padding: 50px 0;
  /* background: #f6f6f6; */
  background: ${({ theme }) => theme.colors.bg2.secondary};
  overflow: hidden;

  .svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    svg {
      fill: ${({ theme }) => theme.colors.bg2.primary};
    }
  }

  .custom-container {
    position: relative;
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 15px;

    .section-header {
      margin: 0 0 25px;
      h2 {
        font-size: 2.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.heading};
        margin: 25px 0;
        font-weight: 500;
      }
    }

    .team-list {
      text-align: center;
      .swiper {
        justify-content: center;
        align-items: center;
        height: calc(100%);
        padding: 2rem 2rem;
        width: 100%;
      }
      .swiper-wrapper {
        .swiper-slide {
          position: relative;
          transition: all 0.5s;
          &:hover {
            transform: scale(1.05);
          }
        }
      }
    }

    .slide-controller {
      margin-top: 20px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;

      .slider-arrow {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        position: relative;
        font-size: 1.5rem;
      }
      .swiper-button-next {
        transform: translateX(100px);
      }
      .slider-arrow::after {
        content: "";
      }
      .swiper-pagination {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        transform: translateX(-50px);
        position: relative;
        width: 100px;

        .swiper-pagination-bullet {
          width: 1rem;
          height: 1rem;
        }
      }
    }

    .team-box {
      background: ${({ theme }) => theme.colors.bg2.primary};
      border-radius: 10px;
      border-width: 1px 1px 1px 1px;
      border-color: ${({ theme }) => theme.colors.border2.primary};
      text-align: center;
      padding: 30px;
      cursor: pointer;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      &:hover {
        background: ${({ theme }) => theme.colors.bg2.secondary};
        .link-btn {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .link-btn {
        z-index: 30;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid;
          border-color: ${({ theme }) => theme.colors.border2.primary};
          font-size: 1rem;
          font-weight: 600;
          padding: 18px;
          margin: 0 1rem;
          transition: all 0.5s;

          &:hover {
            border-color: ${({ theme }) => theme.colors.cyan};
            background-color: ${({ theme }) => theme.colors.cyan};
            a {
              color: ${({ theme }) => theme.colors.white};
            }
          }

          a {
            font-size: 1.5rem;
            color: ${({ theme }) => theme.colors.heading};
          }
        }
      }

      .team-member {
        div {
          display: flex;
          justify-content: center;
          margin: 20px auto;
          align-items: center;
          box-shadow: 0px 0px 0px 3px
            ${({ theme }) => theme.colors.boxShadow.primary};
          overflow: hidden;
          object-fit: cover;
          border: solid 4px ${({ theme }) => theme.colors.white};
          img {
            max-width: 100%;
            height: auto;
          }
          &:hover {
            box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.colors.cyan};
          }
        }
      }
      .team-box-content {
        color: ${({ theme }) => theme.colors.heading};
        h3 {
          font-size: calc(1.2rem + 4 * (100vw - 320px) / 1600);
          font-weight: 600;
        }
        h4 {
          font-size: calc(0.8rem + 4 * (100vw - 320px) / 1600);
          font-weight: 500;
        }
      }
    }
  }

  @media only screen and (min-width: 1680px) {
    .custom-container {
      max-width: 1450px;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    }
  }
  @media screen and (min-width: 992px) {
    .team-list{
      margin: 10px 50px;
    }
    .team-list li {
      width: calc(26% - 20px);
    }
    .team-member {
      div {
        width: 150px;
        height: 150px;
      }
    }
    .swiper-pagination {
      display: none !important;
    }
  }
  @media only screen and (max-width: 992px) {
    .team-list li {
      width: 350px;
    }
    .team-member {
      div {
        width: 150px;
        height: 150px;
      }
    }
  }
`;
