import React from 'react';
import IcoMoon from "react-icomoon";
import iconSet from "./icomoon.json";

export interface OwnIconPropType {
  className?: string,
  onClick?: ( event: any) => void,
  style?: object,
  isActive?: boolean,
  isShow?: boolean,
}
const OwnIconDefaultProp: OwnIconPropType = {
  className: '',
  onClick: ( event: any) => null,
  style: {},
  isActive: false,
  isShow: true,
}

export const OwnIcon: any = {
  IconDownload: ( props: OwnIconPropType) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return(
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} style={props.style} viewBox="0 0 32 32" fill='currentColor' stroke='none' >
        <path d="M30.048 15.577c-0.001 0-0.003 0-0.004 0-0.479 0-0.868 0.389-0.868 0.868 0 0.001 0 0.003 0 0.004v-0 7.928c-0.003 2.156-1.75 3.902-3.905 3.905h-19.122c-2.156-0.003-3.902-1.75-3.905-3.905v-8.058c-0.019-0.467-0.402-0.838-0.871-0.838s-0.853 0.371-0.871 0.836l-0 0.002v8.057c0.003 3.119 2.53 5.646 5.649 5.649h19.12c3.119-0.003 5.646-2.53 5.649-5.649v-7.928c0-0.482-0.39-0.872-0.872-0.872v0zM30.048 15.577"></path>
        <path d="M15.096 23.105c0.157 0.158 0.373 0.256 0.613 0.259h0c0.001 0 0.002 0 0.003 0 0.239 0 0.456-0.099 0.61-0.258l5.539-5.539c0.158-0.158 0.255-0.376 0.255-0.617 0-0.482-0.39-0.872-0.872-0.872-0.241 0-0.459 0.098-0.617 0.255v0l-4.048 4.055v-17.683c0-0.010 0.001-0.022 0.001-0.034 0-0.482-0.39-0.872-0.872-0.872s-0.872 0.39-0.872 0.872c0 0.012 0 0.024 0.001 0.036l-0-0.002v17.681l-4.052-4.053c-0.158-0.158-0.376-0.255-0.617-0.255-0.482 0-0.872 0.39-0.872 0.872 0 0.241 0.098 0.459 0.255 0.617v0zM15.096 23.105"></path>
      </svg>
    )
  },
  IconCardSend: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return(
      <svg className={`own_icon ${props.className}`} onClick={props.onClick}  viewBox="0 0 22.007 20.529" fill='currentColor' stroke='none' >
        <path d="M21.862,1.449a.328.328,0,0,0-.355-.051L.19,11.3a.329.329,0,0,0-.006.593l6.033,2.961a.328.328,0,0,0,.341-.032l5.866-4.384-4.6,4.736a.329.329,0,0,0-.092.254L8.185,21.4a.328.328,0,0,0,.225.287.335.335,0,0,0,.1.016.328.328,0,0,0,.249-.114l3.2-3.71,3.959,1.891a.328.328,0,0,0,.455-.2l5.582-17.78a.327.327,0,0,0-.1-.345Zm0,0" transform="translate(0 -1.255)"></path>
      </svg>
    )
  },
  IconSearch: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return(
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 32.997 34.178" fill='currentColor' stroke='none' >
        <path d="M33.479,31.13l-8.134-8.46A13.794,13.794,0,1,0,14.783,27.6a13.651,13.651,0,0,0,7.906-2.5l8.2,8.524a1.8,1.8,0,1,0,2.594-2.5ZM14.783,3.6a10.2,10.2,0,1,1-10.2,10.2A10.211,10.211,0,0,1,14.783,3.6Z" transform="translate(-0.984)"></path>
      </svg>
    )
  },
  IconEdit: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return(
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 1024 1024" fill='currentColor' stroke='none' >
        <path d="M0 1007.328c0 8.832 7.168 16 16 16h995.552c2.144 0 4.224-0.416 6.176-1.248s3.712-2.016 5.184-3.488c0.032-0.032 0.064-0.032 0.096-0.064 0.096-0.096 0.096-0.288 0.224-0.384 1.632-1.76 2.688-3.904 3.424-6.24 0.224-0.736 0.32-1.44 0.448-2.208 0.128-0.8 0.48-1.504 0.48-2.336 0-1.28-0.448-2.4-0.736-3.584-0.096-0.448 0.096-0.896-0.064-1.344l-101.12-310.88c-0.768-2.4-2.112-4.608-3.904-6.368l-547.744-547.776c-0.576-0.896-0.992-1.856-1.76-2.656l-119.648-119.648c-19.424-19.424-51.040-19.424-70.496 0l-167.52 167.52c-9.408 9.408-14.592 21.92-14.592 35.232s5.184 25.856 14.592 35.264l116.992 116.992c0.576 0.864 0.96 1.856 1.728 2.624l546.88 550.56c1.888 1.92 4.192 3.296 6.784 4.064l214.816 64h-885.792c-8.832-0.032-16 7.136-16 15.968zM203.584 325.152l501.984 495.552-18.464 64.064-519.84-523.296 36.32-36.32zM730.112 800l-503.936-497.44 77.984-77.984 499.424 500.736v74.688h-73.472zM823.52 700l-496.736-498.048 33.248-33.248 518.752 518.752-55.264 12.544zM735.616 832h83.968c8.832 0 16-7.168 16-16v-85.92l64.224-14.592 87.136 267.84-271.616-80.928 20.288-70.4zM32 217.856c0-4.768 1.856-9.216 5.216-12.608l167.52-167.52c6.944-6.944 18.24-6.976 25.248 0l107.904 107.904-192.736 192.736-107.904-107.904c-3.392-3.36-5.248-7.84-5.248-12.608z"></path>
      </svg>
    )
  },
  IconImage: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return(
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 512 512" fill='currentColor' stroke='none' >
        <path d="M479.942 64c0.020 0.017 0.041 0.038 0.058 0.058v383.885c-0.017 0.020-0.038 0.041-0.058 0.058h-447.885c-0.020-0.017-0.041-0.038-0.057-0.058v-383.886c0.017-0.020 0.038-0.041 0.057-0.057h447.885zM480 32h-448c-17.6 0-32 14.4-32 32v384c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-32v-384c0-17.6-14.4-32-32-32v0z"></path>
        <path d="M416 144c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48z"></path>
        <path d="M448 416h-384v-64l112-192 128 160h32l112-96z"></path>
      </svg>
    )
  },
  IconNotify: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.94,14H5.06L5.79,8.44A6.26,6.26,0,0,1,12,3h0a6.26,6.26,0,0,1,6.21,5.44Zm2,5-1.71-4H4.78L3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19Z" fill="transparent"></path>
        <path d="M20.94,19L19,14.49s-0.41-3.06-.8-6.06A6.26,6.26,0,0,0,12,3h0A6.26,6.26,0,0,0,5.79,8.44L5,14.49,3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19ZM12,4.75h0a4.39,4.39,0,0,1,4.35,3.81c0.28,2.1.56,4.35,0.7,5.44H7L7.65,8.56A4.39,4.39,0,0,1,12,4.75ZM5.52,18l1.3-3H17.18l1.3,3h-13Z" ></path>
      </svg>
    )
  },
  IconBooks: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    if( props.isActive ){
      return (
        <svg className={`own_icon ${props.className}`} onClick={props.onClick} style={{fill:'rgb(236, 0, 93)'}} viewBox="0 0 36 32" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM6 10h-4v-2h4v2z"></path>
          <path d="M17 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM16 10h-4v-2h4v2z"></path>
          <path d="M23.909 5.546l-5.358 2.7c-0.491 0.247-0.691 0.852-0.443 1.343l8.999 17.861c0.247 0.491 0.852 0.691 1.343 0.443l5.358-2.7c0.491-0.247 0.691-0.852 0.443-1.343l-8.999-17.861c-0.247-0.491-0.852-0.691-1.343-0.443z"></path>
        </svg>
      )
    }else{
      return (
        <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 36 32" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM6 10h-4v-2h4v2z"></path>
          <path d="M17 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM16 10h-4v-2h4v2z"></path>
          <path d="M23.909 5.546l-5.358 2.7c-0.491 0.247-0.691 0.852-0.443 1.343l8.999 17.861c0.247 0.491 0.852 0.691 1.343 0.443l5.358-2.7c0.491-0.247 0.691-0.852 0.443-1.343l-8.999-17.861c-0.247-0.491-0.852-0.691-1.343-0.443z"></path>
        </svg>
      )
    }
  },
  IconWorld: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 512 512" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 0c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zM256 480.001c-31.479 0-61.436-6.506-88.615-18.226l116.574-131.145c2.603-2.929 4.041-6.711 4.041-10.63v-48c0-8.837-7.163-16-16-16-56.495 0-116.102-58.731-116.687-59.313-3-3.001-7.070-4.687-11.313-4.687h-64c-8.836 0-16 7.164-16 16v96c0 6.061 3.424 11.601 8.845 14.311l55.155 27.578v93.943c-58.026-40.478-96-107.716-96-183.832 0-34.357 7.745-66.903 21.569-96h58.431c4.244 0 8.313-1.686 11.314-4.686l64-64c3-3.001 4.686-7.070 4.686-11.314v-38.706c20.281-6.037 41.759-9.294 64-9.294 35.203 0 68.502 8.13 98.141 22.6-2.072 1.751-4.088 3.582-6.023 5.518-18.133 18.132-28.118 42.239-28.118 67.882s9.985 49.75 28.118 67.882c18.217 18.216 42.609 28.132 67.817 28.13 1.583 0 3.171-0.040 4.759-0.118 6.907 25.901 19.376 93.328-4.202 186.167-0.222 0.872-0.348 1.744-0.421 2.612-40.662 41.54-97.35 67.328-160.071 67.328z"></path>
      </svg>
    )
  },
  IconUser: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 32 32" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
      </svg>
    )
  },
  IconFeeds: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 32 32" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 8v-4h-28v22c0 1.105 0.895 2 2 2h27c1.657 0 3-1.343 3-3v-17h-4zM26 26h-24v-20h24v20zM4 10h20v2h-20zM16 14h8v2h-8zM16 18h8v2h-8zM16 22h6v2h-6zM4 14h10v10h-10z"></path>
      </svg>
    )
  },
  IconHeart: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    if( props.isActive ){
      return(
        <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 50 50" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
          <path style={{fill:'rgb(236, 0, 93)'}} d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/>
          <path style = {{fill :'#ED7161'}} d="M6,18.078c-0.553,0-1-0.447-1-1c0-5.514,4.486-10,10-10c0.553,0,1,0.447,1,1s-0.447,1-1,1 c-4.411,0-8,3.589-8,8C7,17.631,6.553,18.078,6,18.078z"/>
        </svg>
      )
    }else{
      return (
        <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 1024 1024" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
          {/* <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path> */}
          <path  d="M934.176 168.48c-116.128-115.072-301.824-117.472-422.112-9.216-120.32-108.256-305.952-105.856-422.144 9.216-119.712 118.528-119.712 310.688 0 429.28 34.208 33.888 353.696 350.112 353.696 350.112 37.856 37.504 99.072 37.504 136.896 0 0 0 349.824-346.304 353.696-350.112 119.744-118.592 119.744-310.752-0.032-429.28zM888.576 552.576l-353.696 350.112c-12.576 12.512-33.088 12.512-45.6 0l-353.696-350.112c-94.4-93.44-94.4-245.472 0-338.912 91.008-90.080 237.312-93.248 333.088-7.104l43.392 39.040 43.36-39.040c95.808-86.144 242.112-83.008 333.12 7.104 94.4 93.408 94.4 245.44 0.032 338.912zM296.096 240.032c8.864 0 16 7.168 16 16s-7.168 16-16 16h-0.032c-57.408 0-103.968 46.56-103.968 103.968v0.032c0 8.832-7.168 16-16 16s-16-7.168-16-16v0c0-75.072 60.832-135.904 135.872-135.968 0.064 0 0.064-0.032 0.128-0.032z"></path>
        </svg>
      )
    }
  },
  IconEyeOpen: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 1024 1024" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path  d="M1022.88 504.832c-0.32-1.344-0.128-2.784-0.64-4.096-0.192-0.544-0.672-0.832-0.864-1.344-0.32-0.768-0.256-1.632-0.672-2.368-92.8-177.632-294.816-304.896-507.936-304.896-213.152 0-415.136 127.072-508 304.672-0.416 0.736-0.352 1.6-0.672 2.368-0.224 0.512-0.672 0.8-0.864 1.344-0.512 1.312-0.32 2.752-0.64 4.096-0.576 2.4-1.12 4.704-1.12 7.168s0.576 4.736 1.12 7.168c0.32 1.344 0.128 2.784 0.64 4.096 0.192 0.544 0.672 0.832 0.864 1.344 0.32 0.768 0.256 1.632 0.672 2.368 92.832 177.632 294.848 304.896 508 304.896 213.12 0 415.136-127.072 507.936-304.672 0.448-0.736 0.384-1.6 0.672-2.368 0.192-0.512 0.672-0.8 0.864-1.344 0.512-1.312 0.32-2.752 0.64-4.096 0.544-2.432 1.12-4.736 1.12-7.168s-0.576-4.768-1.12-7.168zM512.736 767.616c-179.68 0-355.584-102.112-443.232-255.84 88.128-153.92 263.776-255.68 443.232-255.68 179.616 0 355.552 102.144 443.2 255.84-88.128 153.952-263.744 255.68-443.2 255.68zM512.736 383.968c8.832 0 15.936 7.136 15.936 16 0 8.8-7.136 15.968-15.936 15.968v0.032c-52.928 0-95.968 43.040-95.968 95.904 0 8.832-7.168 16-15.968 16-8.832 0-16-7.168-16-16 0-70.56 57.184-127.744 127.744-127.872 0.064 0 0.128-0.032 0.192-0.032zM512 288c-123.744 0-224 100.288-224 224s100.288 224 224 224c123.68 0 224-100.32 224-224 0-123.744-100.32-224-224-224zM512 704c-105.888 0-192-86.112-192-192s86.112-192 192-192c105.888 0 192 86.112 192 192s-86.112 192-192 192z"></path>
      </svg>
    )
  },
  IconEyeClosed: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 32 32" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.561 0.439c-0.586-0.586-1.535-0.586-2.121 0l-6.318 6.318c-1.623-0.492-3.342-0.757-5.122-0.757-6.979 0-13.028 4.064-16 10 1.285 2.566 3.145 4.782 5.407 6.472l-4.968 4.968c-0.586 0.586-0.586 1.535 0 2.121 0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439l27-27c0.586-0.586 0.586-1.536 0-2.121zM13 10c1.32 0 2.44 0.853 2.841 2.037l-3.804 3.804c-1.184-0.401-2.037-1.521-2.037-2.841 0-1.657 1.343-3 3-3zM3.441 16c1.197-1.891 2.79-3.498 4.67-4.697 0.122-0.078 0.246-0.154 0.371-0.228-0.311 0.854-0.482 1.776-0.482 2.737 0 1.715 0.54 3.304 1.459 4.607l-1.904 1.904c-1.639-1.151-3.038-2.621-4.114-4.323z"></path>
        <path d="M24 13.813c0-0.849-0.133-1.667-0.378-2.434l-10.056 10.056c0.768 0.245 1.586 0.378 2.435 0.378 4.418 0 8-3.582 8-8z"></path>
        <path d="M25.938 9.062l-2.168 2.168c0.040 0.025 0.079 0.049 0.118 0.074 1.88 1.199 3.473 2.805 4.67 4.697-1.197 1.891-2.79 3.498-4.67 4.697-2.362 1.507-5.090 2.303-7.889 2.303-1.208 0-2.403-0.149-3.561-0.439l-2.403 2.403c1.866 0.671 3.873 1.036 5.964 1.036 6.978 0 13.027-4.064 16-10-1.407-2.81-3.504-5.2-6.062-6.938z"></path>
      </svg>
    )
  },
  IconDelete: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 32 32" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z"></path>
      </svg>
    )
  },
  IconComment: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 1024 1024" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path  d="M512 224c8.832 0 16 7.168 16 16s-7.2 16-16 16c-170.464 0-320 89.728-320 192 0 8.832-7.168 16-16 16s-16-7.168-16-16c0-121.408 161.184-224 352-224zM512 64c-282.784 0-512 171.936-512 384 0 132.064 88.928 248.512 224.256 317.632 0 0.864-0.256 1.44-0.256 2.368 0 57.376-42.848 119.136-61.696 151.552 0.032 0 0.064 0 0.064 0-1.504 3.52-2.368 7.392-2.368 11.456 0 16 12.96 28.992 28.992 28.992 3.008 0 8.288-0.8 8.16-0.448 100-16.384 194.208-108.256 216.096-134.88 31.968 4.704 64.928 7.328 98.752 7.328 282.72 0 512-171.936 512-384s-229.248-384-512-384zM512 768c-29.344 0-59.456-2.24-89.472-6.624-3.104-0.512-6.208-0.672-9.28-0.672-19.008 0-37.216 8.448-49.472 23.36-13.696 16.672-52.672 53.888-98.72 81.248 12.48-28.64 22.24-60.736 22.912-93.824 0.192-2.048 0.288-4.128 0.288-5.888 0-24.064-13.472-46.048-34.88-56.992-118.592-60.544-189.376-157.984-189.376-260.608 0-176.448 200.96-320 448-320 246.976 0 448 143.552 448 320s-200.992 320-448 320z"></path>
      </svg>
    )
  },

  IconShare: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 448 448" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path  d="M368.031 279.25v64.75c0 39.75-32.25 72-72 72h-208c-39.75 0-72-32.25-72-72v-208c0-39.75 32.25-72 72-72h63.75c4.25 0 8 3.5 8 8 0 4-2.75 7.25-6.5 8-12.5 4.25-23.75 9.25-33.25 15-1.25 0.5-2.5 1-4 1h-28c-22 0-40 18-40 40v208c0 22 18 40 40 40h208c22 0 40-18 40-40v-53.5c0-3 1.75-5.75 4.5-7.25 5-2.25 9.5-5.5 13.5-9.25 2.25-2.25 5.75-3.25 8.75-2s5.25 4 5.25 7.25zM427.281 155.25l-96 96c-3 3.25-7 4.75-11.25 4.75-2 0-4.25-0.5-6.25-1.25-5.75-2.5-9.75-8.25-9.75-14.75v-48h-40c-55 0-90 10.5-109.5 32.75-20.25 23.25-26.25 60.75-18.5 118.25 0.5 3.5-1.75 7-5 8.5-1 0.25-2 0.5-3 0.5-2.5 0-5-1.25-6.5-3.25-1.75-2.5-41.5-58.75-41.5-108.75 0-67 21-144 184-144h40v-48c0-6.5 4-12.25 9.75-14.75 2-0.75 4.25-1.25 6.25-1.25 4.25 0 8.25 1.75 11.25 4.75l96 96c6.25 6.25 6.25 16.25 0 22.5z"></path>
      </svg>
    )
  },
  IconChart: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 576 512" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
      </svg>
    )
  },
  IconAddNewEpisode: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 401.994 401.994" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M394,154.175c-5.331-5.33-11.806-7.994-19.417-7.994H255.811V27.406c0-7.611-2.666-14.084-7.994-19.414 C242.488,2.666,236.02,0,228.398,0h-54.812c-7.612,0-14.084,2.663-19.414,7.993c-5.33,5.33-7.994,11.803-7.994,19.414v118.775 H27.407c-7.611,0-14.084,2.664-19.414,7.994S0,165.973,0,173.589v54.819c0,7.618,2.662,14.086,7.992,19.411 c5.33,5.332,11.803,7.994,19.414,7.994h118.771V374.59c0,7.611,2.664,14.089,7.994,19.417c5.33,5.325,11.802,7.987,19.414,7.987 h54.816c7.617,0,14.086-2.662,19.417-7.987c5.332-5.331,7.994-11.806,7.994-19.417V255.813h118.77 c7.618,0,14.089-2.662,19.417-7.994c5.329-5.325,7.994-11.793,7.994-19.411v-54.819C401.991,165.973,399.332,159.502,394,154.175z"/>
      </svg>
    )
  },
  IconBack: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 492 492" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124 c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844 L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412 c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008 c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788 C492,219.198,479.172,207.418,464.344,207.418z"/>        
      </svg>
    )
  },
  IconBackFlat: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 492 492" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"/> 
      </svg>
    )
  },
  IconNextFlat: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 492.004 492.004" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>   
      </svg>
    )
  },

  IconAlert: ( props: OwnIconPropType = OwnIconDefaultProp ) => {
    props = { ...OwnIconDefaultProp, ...props};
    if(!props.isShow) { return null }
    return (
      <svg className={`own_icon ${props.className}`} onClick={props.onClick} viewBox="0 0 512 512" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false" xmlns="http://www.w3.org/2000/svg">
          <path d="M256 48c-55.559 0-107.792 21.636-147.078 60.922s-60.922 91.519-60.922 147.078c0 55.559 21.636 107.792 60.922 147.078s91.519 60.922 147.078 60.922c55.559 0 107.792-21.636 147.078-60.922s60.922-91.519 60.922-147.078c0-55.559-21.636-107.792-60.922-147.078s-91.519-60.922-147.078-60.922zM256 0v0c141.385 0 256 114.615 256 256s-114.615 256-256 256c-141.385 0-256-114.615-256-256s114.615-256 256-256zM224 352h64v64h-64zM224 96h64v192h-64z"></path>
      </svg>
    )
  },
}




export interface FoxIconType {
  className: string | any,
  style:  React.CSSProperties
}
export const FoxIcon = (props: any & FoxIconType) => (
  <label className='block' {...props} style={{...props.style, fontSize: 0}}>
    <IcoMoon iconSet={iconSet} {...props} className='' style={{width: props.style?.fontSize, height: props.style?.fontSize}} />
  </label>
);