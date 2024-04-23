import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import styled from 'styled-components';

function Star({ stars, reviews }) {
    const ratingStar = Array.from({length: 5},(elem, index)=>{
        let Number = index + 0.5;
        return (<span key ={index}>
            {
                stars>= index+1 ? (<FaStar className = "icon"/>) : stars>= Number ? (<FaStarHalfAlt className = "icon"/>) :(<FaRegStar className = "icon"/>)
            }
        </span>
        );
        });
        return (
            <Wrapper>
              <div className="icon-style">
                {ratingStar}
                <p>({reviews} customer reviews)</p>
              </div>
            </Wrapper>
          );
        };
        
        const Wrapper = styled.section`
          .icon-style {
            display: flex;
            gap: 0.2rem;
            align-items: center;
            justify-content: flex-start;
        
            .icon {
              font-size: 2rem;
              color: orange;
            }
        
            .empty-icon {
              font-size: 2.6rem;
            }
            p {
              margin: 0;
              padding-left: 1.2rem;
            }
          }
        `;

export default Star;
