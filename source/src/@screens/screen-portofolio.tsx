import { ParsingCommentsDataBundlePropType } from "@interfaces/data-type/type.pages-comments";
import { Dispatch, FoxIcon, StoragesSystem } from "index-module";
import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { HeaderGlobal } from "@module-layout/header/index.header.global";
import { FooterGlobal } from "@module-layout/footer/index.footer.global";
import { OwnImage } from "@img/module-images";
import { SkillSets } from "./data/skill-sets";
import { LibSets } from "./data/lib-sets";

export interface ScreenHomePropTypeSmall {
  StoragesSystem: any;
  setStorage?: (obj: ParsingCommentsDataBundlePropType) => void;
}

export type ScreenHomePropType = ScreenHomePropTypeSmall & RouteComponentProps;

export interface ScreenHomeStateType {
  catalog: any;
  key: any;
  searchKey: any;
}

const ScreenPortofolioDefaultProps: ScreenHomePropTypeSmall = {
  StoragesSystem: {
    catalog: [],
  },
};
const BOTTOM_MENU = [
  {
    icon: "office",
    title: "Admin Produksi",
    subs: "NXP Semiconductors Malaysia, Selangor, Malaysia",
    year: "2018 - 2022",
    detail:
      "Memanajemen dan mengontrol proses produksi dan mengumpulkan data produksi",
  },
  {
    icon: "office",
    title: "Staff Accounting",
    subs: "PT Cahaya Fortuna Sejati, Yogyakarta",
    year: "Oct 2015 - Jul 2017",
    detail: `Memantau dan memanajemen keuangan di perusahaan tersebut, dan memantau
    efisiensi prosedur dan program Akuntansi`,
  },
  {
    icon: "office",
    title: "Staff Accounting",
    subs: "PT Dwidaya World Wide, Yogyakarta",
    year: "Dec 2014 - Jul 2015",
    detail: `Memantau dan memanajemen keuangan di perusahaan tersebut, dan memantau
      efisiensi prosedur dan program akuntansi yang berjalan serta mengolah data-data
      wisatawan yang menggunakan jasa di perusahaan tersebut
      `,
  },
];

class ScreenPortofolio extends Component<ScreenHomePropType, any> {
  static defaultProps = ScreenPortofolioDefaultProps;
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const { props, state } = this;
    return (
      <>
        {/* <HeaderGlobal topMenu = {MENU} logo = {this.logo} / > */}
        <section>
          <div className="oneboxbanner">
            <div
              className="onebanner oneleft"
              style={{
                backgroundImage: `url(${OwnImage.Back4})`,
                minHeight: "43em",
              }}
            >
              <div style={{ height: "100px" }} />
              <div className="oneportoinfo">
                <div className="imgluar">
                  <img className="img" src={OwnImage.Retna} />
                </div>
              </div>
              <div className="onetitleone onec-white">
                Hi, Saya Retna, Saya seorang wanita karir yang ahli dalam bidang
              </div>
              <div className="onetitletwo onec-white">
                <span className="onetextbox onec-orange">Akuntan</span>
                <span className="onetextbox onec-green">Perpajakan</span>
                <span className="onetextbox onec-semiorange">Administrasi</span>
                <span className="onetextbox onec-semiorange">
                  Customer Care
                </span>
              </div>
              <div className="onetitletree onec-white">
                Saya berpengalaman dalam industri lebih dari 8 tahun, jika kamu
                tertarik untuk melakukan projek, kolaborasi, atau alasan untuk
                ngopi bareng, jangan malu untuk menghubungi saya via email atau
                telephon
              </div>
            </div>
          </div>

          <div
            className="onecol ogray"
            style={{ textAlign: "center" }}
            id="about"
          >
            <div className="m1 oneinfo absolute odarkgray ">
              <div className="onetitle onec-blue">Tentang Diriku</div>
              <div className="talktome">
                <p style={{ marginBottom: "15px" }}>
                  Saya Retnasari, umumnya teman-temanku memanggilku Retna, saya
                  asli klaten akan tetapi domisili sekarang di Yogyakarta, saya
                  seorang Akuntan, pengalaman tersebut saya dapatkan sejak di
                  bangku perkuliahan serta pengalaman dari beberapa perusahaan
                  tempat saya bekerja, saya sangat menguasai akuntan, keuangan
                  dan perpajakan.
                </p>

                <p style={{ marginBottom: "15px" }}>
                  Saya orangnya mudah membaur di tempat baru, bisa bekerja dan
                  beradaptasi dengan situasi dan tekanan yang tinggi,
                  mempelajari hal baru adalah hobi saya, semakin menantang suatu
                  pekerjaan semakin membuatku berambisi untuk menguasai bidang
                  tersebut.
                </p>
                <p style={{ marginBottom: "15px" }}>
                  Saya aktif di media sosial, karena memahami perilaku dan
                  kebiasaan orang dalam dunia sosial maya itu merupakan
                  pengalaman yang penting buat saya, jika menemukan saya di
                  internet, jangan sungkan untuk chit-chat dengan saya.
                </p>
              </div>
            </div>
            <div className="l1 absolute aboutme">
              <div className="containerbox d_flex flex_wrap justify_content_center">
                <div className="l2 oneleft box">
                  <img src={OwnImage.Edu} />
                  <div className="tittle">Lulusan D3 Akuntansi</div>
                  <div className="line onebg-orange" />
                  <div className="text">
                    Saya lulusan D3 Akuntansi pada tahun 2014 di Universitas
                    Teknologi Yogyakarta.
                  </div>
                  <div className="subtitle">
                    "Universitas Teknologi Yogyakarta"
                  </div>
                </div>
                <div className="l2 oneleft box">
                  <img src={OwnImage.Certified} />
                  <div className="tittle">SMK Akuntansi</div>
                  <div className="line onebg-green" />
                  <div className="text">
                    Saya SMK pada tahun 2011 dengan mengambil fokus ke bidang
                    akutansi dan perpajakan di SMK Negeri 1 Klaten
                  </div>
                  <div className="subtitle">"SMK Negeri 1 Klaten, Klaten"</div>
                </div>
              </div>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "rgb(221,222,204)",
                  transform: "rotateZ(45deg)",
                  OTransform: "rotateZ(45deg)",
                  msTransform: "rotateZ(45deg)",
                  WebkitTransform: "rotateZ(45deg)",
                  borderRadius: "10px",
                  position: "absolute",
                  bottom: "-60px",
                  left: "25%",
                }}
              />
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "rgb(221,222,204)",
                  transform: "rotateZ(45deg)",
                  OTransform: "rotateZ(45deg)",
                  msTransform: "rotateZ(45deg)",
                  WebkitTransform: "rotateZ(45deg)",
                  borderRadius: "10px",
                  position: "absolute",
                  bottom: "-60px",
                  left: "40%",
                }}
              />
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "rgb(221,222,204)",
                  transform: "rotateZ(45deg)",
                  OTransform: "rotateZ(45deg)",
                  msTransform: "rotateZ(45deg)",
                  WebkitTransform: "rotateZ(45deg)",
                  borderRadius: "10px",
                  position: "absolute",
                  bottom: "-60px",
                  left: "75%",
                }}
              />
            </div>
          </div>

          <div className="onecol onebg-white" style={{ textAlign: "center" }}>
            <div
              className="backimg skills"
              style={{ backgroundImage: `url(${OwnImage.Back2})` }}
            >
              <div className="m1 oneinfo absolute">
                <div className="onetitle onec-blue">Apa Yang Aku Punya?</div>
                <div style={{ fontSize: "0.7em" }}>
                  Aku punya semuanya dalam tubuh ini, meliputi:
                </div>
              </div>
              <div className="l1 absolute personalskills">
                <div className="centerimg hide-photo">
                  <div
                    className="backimg img"
                    style={{ backgroundImage: `url(${OwnImage.Retna2})` }}
                  />
                </div>
                <div className="l1 content">
                  <div className="l1" style={{ overflow: "hidden" }}>
                    <div className="l2 oneleft itemright">
                      <img
                        className="oneright onebg-white"
                        src={OwnImage.Analityc}
                      />
                      <div className="oneright onec-blue headtext">
                        Analisa Terbaik
                      </div>
                      <div className="oneright foottext">
                        Saya mempunyai kemampuan analisa yang super{" "}
                      </div>
                    </div>
                    <div className="l2 oneleft itemleft">
                      <img
                        className="oneleft onebg-white"
                        src={OwnImage.HardWork}
                      />
                      <div className="oneleft onec-blue headtext">
                        Pekerja Keras
                      </div>
                      <div className="oneleft foottext">
                        Saya bisa bekerja dalam tekanan yang sangat tinggi
                      </div>
                    </div>
                  </div>
                  <div className="l1" style={{ overflow: "hidden" }}>
                    <div className="l3 oneleft itemright">
                      <img
                        className="oneright onebg-white"
                        src={OwnImage.Fast}
                      />
                      <div className="oneright onec-blue headtext">
                        Mudah Belajar
                      </div>
                      <div className="oneright foottext">
                        Mudah mempelajari hal baru, dan sangat menyukainya
                      </div>
                    </div>
                    <div className="l3 oneleft itemleft  onehide-l"></div>
                    <div className="l3 oneleft itemleft">
                      <img
                        className="oneleft onebg-white"
                        src={OwnImage.Creative}
                      />
                      <div className="oneleft onec-blue headtext">Kreatif</div>
                      <div className="oneleft foottext">
                        Menjadi kreatif adalah prioritasku
                      </div>
                    </div>
                  </div>
                  <div className="l1" style={{ overflow: "hidden" }}>
                    <div className="l3 oneleft itemright">
                      <img
                        className="oneright onebg-white"
                        src={OwnImage.Smart}
                      />
                      <div className="oneright onec-blue headtext">Cerdas</div>
                      <div className="oneright foottext">
                        Selalu membuat ide-ide yang cemerlang
                      </div>
                    </div>
                    <div className="l3 oneleft itemright onehide-l"></div>
                    <div className="l3 oneleft itemleft">
                      <img
                        className="oneleft onebg-white"
                        src={OwnImage.Atitude}
                      />
                      <div className="oneleft onec-blue headtext">
                        Atitut Yang Baik
                      </div>
                      <div className="oneleft foottext">
                        Saya Mempunyai kepribadian dan atitut yang baik
                      </div>
                    </div>
                  </div>
                  <div className="l1" style={{ overflow: "hidden" }}>
                    <div className="l2 oneleft itemright">
                      <img
                        className="oneright onebg-white"
                        src={OwnImage.Problem}
                      />
                      <div className="oneright onec-blue headtext">
                        Pembuat Solusi
                      </div>
                      <div className="oneright foottext">
                        Saya selalu mencari solusi terbaik untuk memecahkan
                        masalah
                      </div>
                    </div>
                    <div className="l2 oneleft itemleft">
                      <img
                        className="oneleft onebg-white"
                        src={OwnImage.Team}
                      />
                      <div className="oneleft onec-blue headtext">
                        Team atau Individu
                      </div>
                      <div className="oneleft foottext">
                        Saya bisa bekerja secara team atau individu
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="onecol" id="skills">
            <div
              className="backimg after"
              style={{ backgroundImage: `url(${OwnImage.Back8})` }}
            >
              <div className="m1 oneinfo absolute">
                <div className="onetitle onec-blue">Keahlian Berbahasa</div>
                <div className="onec-white">
                  Sebagaimana manusia sosial, saya menguasai beberapa bahasa
                </div>
              </div>
              <div
                className="oneuser onecol absolute fexbox"
                id="programmingskill"
              >
                {SkillSets.map((item, i) => (
                  <div className="item box4 oneleft" key={i}>
                    <FoxIcon
                      icon={item.icon}
                      className={`icon oneicon ${item.color}`}
                      style={{
                        fontSize: "5.3em",
                        padding: "25px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="tittle">{item.title}</div>
                    <div className="text">{item.text?.ucwords?.()}</div>
                    <div
                      className="text onec-ungu"
                      style={{ fontWeight: "bold" }}
                    >
                      {item.status?.toUpperCase?.()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div className="onecol onebg-white">
            <div className="m1 oneinfo">
              <div className="onetitle onec-blue">
                Kemampuan Yang Saya Miliki
              </div>
              <div>
                Sebagaimana untuk menunjang produktifitas sehari hari, saya
                mampu menguasai beberapa keahlian
              </div>
            </div>
            <div className="onebg-white oneuser onecol fexbox">
              {LibSets.map((item, i) => (
                <div className="item box4 oneleft" key={i}>
                  <FoxIcon
                    icon={item.icon}
                    className={`icon oneicon ${item.color}`}
                    style={{
                      fontSize: "5.3em",
                      padding: "25px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="tittle">{item.title}</div>
                  <div className="text">{item.text?.ucwords?.()}</div>
                  <div
                    className="text onec-ungu"
                    style={{ fontWeight: "bold" }}
                  >
                    {item.status?.toUpperCase?.()}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="onecol">
            <div
              className="backimg"
              style={{ backgroundImage: `url(${OwnImage.Back2})` }}
            >
              <div className="m1 oneinfo absolute">
                <div className="onetitle onec-blue">
                  Kemampuan Yang Saya Miliki
                </div>
                <div>
                  Sebagaimana untuk menunjang produktifitas sehari hari, saya
                  mampu menguasai beberapa keahlian
                </div>
              </div>
              <div className="oneuser onecol absolute fexbox" id="toolskill">
                {LibSets.map((item, i) => (
                  <div className="item box4 oneleft" key={i}>
                    <FoxIcon
                      icon={item.icon}
                      className={`icon oneicon ${item.color}`}
                      style={{
                        fontSize: "5.3em",
                        padding: "25px",
                        borderRadius: "50%",
                      }}
                    />
                    <div className="tittle">{item.title}</div>
                    <div className="text">{item.text?.ucwords?.()}</div>
                    <div
                      className="text onec-ungu"
                      style={{ fontWeight: "bold" }}
                    >
                      {item.status?.toUpperCase?.()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <FooterGlobal
          {...props}
          bottomMenu={BOTTOM_MENU}
          title={"Why Choose Me"}
        />
      </>
    );
  }
}

const mapStateToProps = (state: any) => ({
  StoragesSystem: state.StoragesSystem,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setStorage: ({ data, type }: ParsingCommentsDataBundlePropType) =>
    dispatch(new StoragesSystem().setStorage({ data, type })),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScreenPortofolio)
);
