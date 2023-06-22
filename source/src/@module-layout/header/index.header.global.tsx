import React, { Component } from "react";
import {FoxIcon } from "index-module";
import { OwnImage } from "@img/module-images";


const defaultProps = {
  topMenu: [
    {id: '#skills', className: "oneleft onehide-l", label: "Our Skills"},
    {id: '#portofolio', className: "oneleft onehide-l", label: "Portofolio"},
    {id: '#why-us', className: "oneleft onehide-l", label: "Why Us"},
    {id: '#contact', className: "oneleft onehide-l", label: "Contact"},
    {id: 'menu', className: "oneright menubtn", label: "", icon: "menu", isMenu: true},
    //{id: 'menu', className: "oneright onehide-l", label: "", icon: "search"},
    {id: 'store', className: "oneright onehide-l", label: "", icon: "foxstore", href: "/ridwan/store"},
    {id: 'ridwan2', className: "oneright onehide-l", label: "Ridwan", icon: "ridwan2", href: "/ridwan"}
  ],
  subMenu: [
    {id: '#skills', className: "oneleft onehide-l", label: "Home", icon: "foxdream", href: "/"},
    // {id: '#portofolio', className: "oneleft onehide-l", label: "Portofolio"},
    {id: '#why-us', className: "oneleft onehide-l", label: "Why Us"},
    {id: '#contact', className: "oneleft onehide-l", label: "Contact"},
    {id: 'store', className: "oneright onehide-l", label: "Store", icon: "foxstore", href: "/ridwan/store"},
    {id: 'ridwan2', className: "oneright onehide-l", label: "About Ridwan", icon: "ridwan2", href: "/ridwan"}
  ],
  logo: () => (
    <a href="/" className="title titleimg oneleft" >
      <img src={OwnImage.LogoWhite} />
      <label className="title "><span style={{fontWeight: "bold", color: "#fff"}}>fox</span><span style={{fontWeight:200}}>dreem</span><span className="onetm">TM</span></label>
    </a>
  )
}

export class HeaderGlobal extends Component<any, any> {
  static defaultProps = defaultProps;
  constructor(props: any){
    super(props);
    this.state = {
      showNavClass: ''
    }
  } 

  onClick = (item: any) => {
    if(item.isMenu){
      if(this.state.navshowall == 'navshowall'){
        this.setState({
          navshowall: '',
          menuIconCanle: '',
          menuIcon: 'menu'
        })
      }else{
        this.setState({
          navshowall: 'navshowall',
          menuIconCanle: '',
          menuIcon: 'cancel-circle'
        })
      }
      return undefined
    }
    if(!item.href){
      this.setState({
        navshowall: '',
        menuIconCanle: '',
        menuIcon: 'menu'
      })
      if(document.querySelector(item.id)){
        document.querySelector(item.id).scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
    return undefined
  }
  render(){
    const { props, state } = this; 
    return(
      <nav className="head_navigation d_flex">
        <div className="onenav">
          {props.logo && props.logo()}
          {props.topMenu?.map((item: any, i: number) => (
            <a id={item.id} className={`${item.className}`} key = {i} href={item.href} onClick={item.href ? undefined : () => this.onClick(item)} >
              {item.icon && 
                <FoxIcon icon = {item.isMenu && state.menuIcon  ? state.menuIcon : item.icon} className="onemenu-icon one-foxstore" style ={{fontSize: "1.2em"}} />
              }
              <label className="onehide-l">{item.label}</label>
            </a>
          ))}
          {/* <a id="btn_skills" className="oneleft onehide-l" >
            <label className="onehide-l">Our Skills</label>
          </a>
          <a id="btn_client" className="oneleft onehide-l" ><label className="onehide-l">Portofolio</label></a>
          <a id="btn_us" className="oneleft onehide-l" ><label className="onehide-l">Why Us</label></a>
          
          <a className="oneright menubtn"  id="onemenu">
            <FoxIcon icon = {"menu"} className="onemenu-icon one-menu" style ={{fontSize: "1.2em"}} />
            <label className="onehide-l"></label>
          </a>

          <a className="oneright onehide-l" id="onesearch">
            <FoxIcon icon = {"search"} className="onemenu-icon one-search" style ={{fontSize: "1.2em"}} />
            <label  className="onehide-l"></label>
          </a>
          <a href="/foxdream/ridwan/store" className="oneright onehide-l" >
            <FoxIcon icon = {"foxstore"} className="onemenu-icon one-foxstore" style ={{fontSize: "1.2em"}} />
            <label className="onehide-xl"></label>
          </a>
          <a href="/ridwan" className="oneright onehide-l" >
            <FoxIcon icon = {"ridwan2"} className="onemenu-icon one-ridwan" style ={{fontSize: "1.2em"}} />
            <label className="onehide-xl">RIDWAN</label>
          </a> */}
        </div>
        <div className={`onedrop-nav onebga-moredarkungu onedownnav ${state.navshowall}`} id="downnav" style={{height: '100%'}}>
          {/* <div className="link">
            <div className="onesearch">
              <input type="text" id="find" placeholder="Search..." className="onesearchinput" />
              <select className="oneselect selectcursor" id="type">
                <option value="all" >ALL</option>
                <option value="games">GAMES</option>
                <option value="apps">APPS</option>
                <option value="staff">STUFF</option>
                <option value="lib">LIB</option>
              </select>
              <label className="oneicon one-search onesearchbtn onebg-ungu" onClick={() => null}></label>
            </div>
          </div> */}
          { props.subMenu.map((item: any, i: number) => (
            <a href={item.href} onClick={item.href ? undefined : () => this.onClick(item)} className="link">
              <span className="oneicon one-bathasu linkicon"></span><label className="linkbtn">{item.label?.toUpperCase()}</label>
            </a>
          ))}
          {/* <a href="#skills" className="link">
            <span className="oneicon one-bathasu linkicon"></span><label className="linkbtn">OUR SKILLS</label>
          </a>
          <a href="#client" className="link">
            <span className="oneicon one-briefcase linkicon"></span><label className="linkbtn">OUR PORTOFOLIO</label>
          </a>
          <a href="#contact" className="link">
            <span className="oneicon one-whatsapp linkicon"></span><label className="linkbtn">OUR CONTACT</label>
          </a>
          <a href="#us" className="link">
            <span className="oneicon one-smile linkicon"></span><label className="linkbtn">WHY CHOSE US</label>
          </a>
          <a href="/foxdream/ridwan/store/" className="link">
            <span className="oneicon one-foxstore linkicon"></span><label className="linkbtn">FOX STORE</label>
          </a>
          <a href="http://connect.foxdream.xyz" className="link">
            <span className="oneicon one-electron linkicon"></span><label className="linkbtn">FOX CONNECT</label>
          </a>
          <a href="/foxdream/ridwan/" className="link">
            <span className="oneicon one-ridwan linkicon"></span><label className="linkbtn">ABOUT RIDWAN</label>
          </a> */}
        </div>
        {/* <Container className={"d_flex"}>
          
        </Container> */}
      </nav>
    )
  }
}