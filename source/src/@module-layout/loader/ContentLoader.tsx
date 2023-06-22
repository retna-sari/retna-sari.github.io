import React from 'react'
const ANIMATION_LIST = [
  'null',
  'animation_speed_two',
  'animation_speed_three',
  'animation_speed_foure',
  'animation_speed_five'
]
export const ContentLoader = ({className = "", height= '20%', arrLength = 5, ...props}) => {
  let lastIndex = 0;
  const arr = Array(arrLength || 6).fill(0).map((e,i)=>++i);
  const classNameCallAnimationRandom = (index: number) => {
    const animationClassName = ANIMATION_LIST[lastIndex];
    lastIndex += 1;
    if(index % 3 === 0){
      lastIndex = 1;
    }
    return animationClassName;
  }
  if(!props.isShow) return null
  return (
    <>
      {arr.map((item: any, index: number) => (
        <div className = {`lirary-image ${className}`} key = {index}>
          <div className = {"lirary-image-inside"}>
            <div className = {"image-view"} style={{paddingTop: height}}>
              {/* <OwnIcon type = {"icon-image"} /> */}
              <div className = {`animation-loader ${classNameCallAnimationRandom(index)}`}></div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}