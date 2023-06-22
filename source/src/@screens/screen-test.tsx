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
const FILE = [
  {
    title: "akuntan public modul 1.pdf",
    link: "/file/akuntan public modul 1.pdf",
  },
  { title: "akuntansii-public.pdf", link: "/file/akuntansii-public.pdf" },
  {
    title: "analisis-pengaruh-laba-akuntansi-total-a.pdf",
    link: "/file/analisis-pengaruh-laba-akuntansi-total-a.pdf",
  },
  {
    title: "Belajar Cepat Office 2010.pdf",
    link: "/file/Belajar Cepat Office 2010.pdf",
  },
  {
    title: "Buku Ajar Perpajakan.pdf",
    link: "/file/Buku Ajar Perpajakan.pdf",
  },
  {
    title: "Buku Manajemen Keuangan.pdf",
    link: "/file/Buku Manajemen Keuangan.pdf",
  },
  {
    title: "buku pengantar akuntansi.pdf",
    link: "/file/buku pengantar akuntansi.pdf",
  },
  {
    title: "Buku_Ajar_Mengenal_Dasar_Ilmu_Akuntansi_1.pdf",
    link: "/file/Buku_Ajar_Mengenal_Dasar_Ilmu_Akuntansi_1.pdf",
  },
  {
    title: "Buku_Pintar_Finansial_-_Pengelolaan_Keuangan_untuk_UMKM.pdf",
    link: "/file/Buku_Pintar_Finansial_-_Pengelolaan_Keuangan_untuk_UMKM.pdf",
  },
  {
    title: "contoh pertanyaan dan interview kerja akutansi.pdf",
    link: "/file/contoh pertanyaan dan interview kerja akutansi.pdf",
  },
  {
    title: "Modul Akuntansi Keuangan 1 by Dy Ilham Satria.pdf",
    link: "/file/Modul Akuntansi Keuangan 1 by Dy Ilham Satria.pdf",
  },
  {
    title: "Pengantar Akuntansi 1 Teori & Praktik.pdf",
    link: "/file/Pengantar Akuntansi 1 Teori & Praktik.pdf",
  },
  {
    title: "pengantar-management.pdf",
    link: "/file/pengantar-management.pdf",
  },
  {
    title: "Perencanaan Keuangan.pdf",
    link: "/file/Perencanaan Keuangan.pdf",
  },
];
const PERTANYAAN = [
  {
    question: "Pengalaman Kerja",
    answer: `
      Saya mempunyai pengalaman ker
    `,
  },
  {
    question: "office",
    answer: "",
  },
];

class ScreenTest extends Component<ScreenHomePropType, any> {
  static defaultProps = ScreenPortofolioDefaultProps;
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const { props, state } = this;
    return (
      <>
        <section style={{ width: "100%", padding: "20px" }}>
          <div className="d_flex">
            <h4>Download File Materi</h4>
          </div>
          {FILE.map((item, i) => (
            <div
              className="file-manager"
              key={i}
              style={{ width: "100%", padding: "5px" }}
            >
              <a
                href={item.link}
                target="_blank"
                className="d_flex"
                style={{ width: "100%" }}
              >
                <div
                  className="d_flex justify_content_between"
                  style={{ width: "100%" }}
                >
                  <span>
                    {i + 1}
                    {". "}
                    {item.title}
                  </span>
                  <span style={{ color: "red" }}>DOWNLOAD</span>
                </div>
              </a>
            </div>
          ))}
        </section>

        <section
          style={{
            width: "100%",
            padding: "20px",
            marginTop: "20px",
            backgroundColor: "#f1f1f1",
          }}
        >
          <div className="d_flex">
            <h4>Pertanyaan Dan Jawaban</h4>
          </div>
          {PERTANYAAN.map((item, i) => (
            <div
              className="file-manager"
              key={i}
              style={{ width: "100%", padding: "5px" }}
            >
              <div
                className="d_flex justify_content_between flex_wrap"
                style={{ width: "100%" }}
              >
                <span>
                  {i + 1}
                  {". "}
                  {item.question}
                </span>
                <div className="jawaban" style={{ width: "100%" }}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </section>
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
  connect(mapStateToProps, mapDispatchToProps)(ScreenTest)
);
