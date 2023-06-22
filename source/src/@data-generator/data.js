export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
const generateData = (data) => {
  return {
    ...data,
    id: uuidv4()
  }
}

export const dataApp = [
  {
    ...generateData({
      title: 'Pasarino',
      tech: 'Angular, IONIC, JS',
      client: 'Indonesia',
      image: [
        {src: '/app/images/pasarino/1.png'},
        {src: '/app/images/pasarino/2.png'},
        {src: '/app/images/pasarino/3.png'}
      ],
      desc: `Pasar inovasi yang menjadi wadah jual beli online di Indonesia. Anda dapat melakukan pembelian pulsa, PPOB, dan produk digital lainnya. Dalam aplikasi ini Anda dapat melakukan deposit terlebih dahulu untuk mendapatkan saldo yang dapat digunakan untuk transaksi pulsa, PPOB, dan produk digital lainnya. Selain itu, saldo dapat dicairkan kembali.`
    })
  },
  
  {
    ...generateData({
      title: 'Utility Management System (UMS)',
      tech: 'Angular, IONIC, JS',
      client: 'Malaysia',
      image: [
        {src: '/app/images/ums/1.png'},
        {src: '/app/images/ums/2.png'},
        {src: '/app/images/ums/3.png'},
        {src: '/app/images/ums/4.png'}
      ],
      desc: `Nanyang Technological Univerisity, this tools if for managing energy consumption for Nanyang Technological Univerisity Malaysia, this apps has 2 version, UMS chiller desktop, and UMS chiller Mobile using ionic technology and angular, this apps are internal apps for managing energy consumption`
    })
  },
  {
    ...generateData({
      title: 'Novartis Memoriasma',
      tech: 'React-Native, JS',
      client: 'Indonesia',
      image: [
        {src: '/app/images/memoriasma/1.png'},
        {src: '/app/images/memoriasma/2.png'},
        {src: '/app/images/memoriasma/3.png'}
      ],
      desc: `Aplikasi Edukasi dan Pemantauan Perjalanan Kontrol Asma dalam upaya peningkatan pelayanan kesehatan dan komunikasi antara dokter dan pasien, aplikasi ini di developt menggunakan teknologi React-native`
    })
  },
  {
    ...generateData({
      title: 'Campedia',
      tech: 'Angular, React-Native, JS',
      client: 'Australia',
      image: [
        {src: '/app/images/campedia/1.png'},
        {src: '/app/images/campedia/2.png'},
        {src: '/app/images/campedia/3.png'}
      ],
      desc: `Berkemah untuk semalam atau bepergian dengan Australian Campedia memberi Anda ketenangan pikiran dengan sistem pencarian dan pemesanan sederhana untuk segala jenis akomodasi atau aktivitas yang Anda cari.

      Dapatkan kenyamanan pencarian intuitif kami dan bandingkan dalam aplikasi untuk menemukan penawaran terbaik yang sempurna untuk jenis perjalanan Anda.
      
      Buat perjalanan dengan membuat rencana perjalanan Anda dan biarkan peta kami merekam semua perjalanan Anda saat terhubung ke google maps untuk menunjukkan jalan ke sana. Hemat lokasi secara efisien untuk memberi Anda lebih banyak waktu untuk melihat pemandangan sambil merekam perjalanan Anda.`
    })
  },
  {
    ...generateData({
      title: 'Vendor App',
      tech: 'React-JS, JS',
      client: 'Australia',
      image: [
        {src: '/app/images/map/1.png'},
        {src: '/app/images/map/2.png'},
        {src: '/app/images/map/3.png'},
        {src: '/app/images/map/4.png'}
      ],
      desc: ` this apps is CMS app to creating based by node, using react technology, this app is for Australian Company to share and sale their property`
    })
  }
]