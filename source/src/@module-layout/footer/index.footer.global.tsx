import React, { Component } from "react";
import { FoxIcon, OwnIcon } from "@icons/module-icons";
import "./index.footer.global.scss";
import { OwnImage } from "@img/module-images";

const FOOTER_BOTTOM_DEF = [{}];

const defaultProps = {
  bottomMenu: FOOTER_BOTTOM_DEF,
  title: "Why Choose Us",
};
export class FooterGlobal extends Component<any> {
  static defaultProps = defaultProps;
  render() {
    const { props } = this;
    return (
      <footer className="footer-main">
        <div className="onecol onebg-gray-85" id="contact">
          <div className="m1 oneinfo">
            <div className="onetitle onec-blue">Kontak</div>
            <div>
              Saya selalu aktif di media sosial, jika ada waktu, silahkan bisa
              menghubungi saya lewat beberapa media dibawah ini, tak perlu malu,
              saya pasti akan meresponse anda dengan senang hati
            </div>
          </div>
          <div className=" oneuser onecol onecontainer d_flex flex_wrap justify_content_center align_items_center">
            <div className="item ml6 oneleft onelinkhover">
              <a href="http://facebook.com/raetnae.ambisi" target="_blank">
                <FoxIcon
                  icon={"fp"}
                  className="icon oneicon one-fp onec-blue rotate"
                  style={{ fontSize: "4em", cursor: "pointer" }}
                />
                <div className="text">Facebook</div>
                <div className="text">@raetnae.ambisi</div>
              </a>
            </div>
            {/* <div className="item ml6 oneleft item onelinkhover"><a href="http://facebook.com/foxdreem.co.id" target="_blank">
              <FoxIcon icon = {"facebook2"} className="icon oneicon one-facebook2 onec-blue rotate" style ={{fontSize: "4em", cursor: "pointer"}} />

              <div className="text">Facebook Fans Page</div>
              <div className="text">@foxdreem.co.id</div></a>
            </div> */}
            <div className="item ml6 oneleft item onelinkhover">
              <a href="https://t.me/R_Retna" target="_blank">
                {/* <div className="icon oneicon one-telegram onec-blue rotate"></div> */}
                <FoxIcon
                  icon={"telegram"}
                  className="icon oneicon one-telegram onec-blue rotate"
                  style={{ fontSize: "4em", cursor: "pointer" }}
                />

                <div className="text">Telegram</div>
                <div className="text">@R_Retna</div>
              </a>
            </div>
            <div className="item ml6 oneleft item onelinkhover">
              <a href="http://instagram.com/retna.sr" target="_blank">
                {/* <div className="icon oneicon one-instagram onec-blue rotate"></div> */}
                <FoxIcon
                  icon={"instagram"}
                  className="icon oneicon one-instagram onec-blue rotate"
                  style={{ fontSize: "4em", cursor: "pointer" }}
                />

                <div className="text">Instagram</div>
                <div className="text">@retna.sr</div>
              </a>
            </div>
            <div className="item ml6 oneleft item onelinkhover">
              <a href="https://wa.me/+6281393266093" target="_blank">
                {/* <div className="icon oneicon one-whatsapp onec-blue rotate"></div> */}
                <FoxIcon
                  icon={"whatsapp"}
                  className="icon oneicon one-whatsapp onec-blue rotate"
                  style={{ fontSize: "4em", cursor: "pointer" }}
                />

                <div className="text">WhatsApp / Phone</div>
                <div className="text">+62 813-9326-6093</div>
              </a>
            </div>
            <div className="item ml6 oneleft item onelinkhover">
              <a href="https://id.linkedin.com/in/retna.sr" target="_blank">
                <FoxIcon
                  icon={"linkedin"}
                  className="icon oneicon one-linkedin onec-blue rotate"
                  style={{ fontSize: "4em", cursor: "pointer" }}
                />

                <div className="text">Linkedin</div>
                <div className="text">@retna.sr</div>
              </a>
            </div>
            <div className="item ml6 oneleft item onelinkhover">
              <a href="mailto:retna624@gmail.com" target="_blank">
                <FoxIcon
                  icon={"envelope"}
                  className="icon oneicon one-linkedin onec-blue rotate"
                  style={{ fontSize: "4em", cursor: "pointer" }}
                />

                <div className="text">Email</div>
                <div className="text">retna624@gmail.com</div>
              </a>
            </div>
          </div>
        </div>
        <div className="onecol onefooter onebg-moredarkungu" id="why-us">
          <div
            className="onecontainer s1 backimg after"
            style={{
              backgroundImage: `url(${OwnImage.Back})`,
              margin: 0,
              paddingBottom: 0,
              overflow: "hidden",
            }}
          >
            <div className="m1 oneinfo absolute">
              <div className="onetitle onec-blue">Pengalaman Kerja</div>
              <div>
                Selama 8 tahun ini, saya pernah bekerja di beberapa tempat
              </div>
            </div>
            <div className="l1 fexbox">
              {props.bottomMenu?.map?.((item: any, i: any) => (
                <div className="l3 oneleft onec-white absolute" key={i}>
                  <div className="oneme childflex" style={{ padding: "15px" }}>
                    {/* <div className={`oneicon ${item.icon}`} style={{textAlign: 'center', fontSize: '3em' }}></div> */}
                    <FoxIcon
                      icon={item.icon}
                      className="oneicon one-location"
                      style={{
                        textAlign: "center",
                        fontSize: "3em",
                        display: "block",
                      }}
                    />
                    <div
                      className="title noborder onec-blue"
                      style={{ border: "none", marginBottom: "0" }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="noborder onec-blue text-center"
                      style={{
                        fontSize: "14px",
                        marginTop: "0",
                        color: "#9E9E9EFF",
                      }}
                    >
                      {"( "}
                      {item.year}
                      {" )"}
                    </div>
                    <div
                      className="noborder onec-blue text-center"
                      style={{ fontSize: "14px", marginTop: "0", opacity: 0.8 }}
                    >
                      {item.subs}
                    </div>
                    <div className="text-center" style={{ color: "#9E9E9EFF" }}>
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="oneinfo onebg-blue onec-white"
          style={{ overflow: "hidden" }}
        >
          <label>Dapatkan Portofolio Offline ku dalam bentuk PDF</label>{" "}
          <a
            href="/file/cv-retna.pdf"
            target="_blank"
            className="oneclick mar-side onehover"
          >
            DOWNLOAD
          </a>
        </div>
      </footer>
    );
  }
}
