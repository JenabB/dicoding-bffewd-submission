class Footer extends HTMLElement {

  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open"
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        footer {
          position: static;
          bottom: 0;
      }
      
      footer img {
          height: 100%;
          width: 100%;
      }
      
      .footer-distributed {
          background-color:rgb(235, 145, 11);
          box-sizing: border-box;
          width: 100%;
          text-align: left;
          font: bold 16px sans-serif;
          padding: 25px 50px 30px 50px;
          margin-top: 80px;
      }
      
      
      
      .footer-distributed .footer-left,
      .footer-distributed .footer-center,
      .footer-distributed .footer-right {
          display: inline-block;
          vertical-align: top;
      }
      
      .footer-distributed .footer-left {
          width: 30%;
      }
      
      .footer-distributed h3 {
          color: #ffffff;
          font-family: sans-serif;
          margin: 0;
      }
      
      
      .footer-distributed .footer-left img {
          width: 30%;
          margin-left: 12%;
      }
      
      .footer-distributed h3 span {
          color: #000000;
          margin-right: 100%;
      }
      
      /* Footer links */
      .footer-distributed .footer-links {
          color: #ffffff;
          margin: 20px 0 12px;
      }
      
      .footer-distributed .footer-links a {
          display: inline-block;
          line-height: 1.8;
          text-decoration: none;
          color: inherit;
      }
      
      .footer-distributed .footer-company-name {
          color: #ffffff;
          font-size: 14px;
          font-weight: normal;
          margin: 0;
      }
      
      /* Footer Center */
      .footer-distributed .footer-center {
          width: 35%;
      }
      
      .footer-distributed .footer-center i {
          background-color: #ffffff;
          color: #ffffff;
          font-size: 25px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          text-align: center;
          line-height: 42px;
          margin: 10px 15px;
          vertical-align: middle;
      }
      
      .footer-distributed .footer-center i.fa-envelope {
          font-size: 17px;
          line-height: 38px;
      }
      
      .footer-distributed .footer-center p {
          display: inline-block;
          color: #ffffff;
          vertical-align: middle;
          margin: 0;
      }
      
      .footer-distributed .footer-center p span {
          display: block;
          font-weight: normal;
          font-size: 14px;
          line-height: 2;
      }
      
      .footer-distributed .footer-center p a {
          color: #000000;
          text-decoration: none;
      }
      
      .footer-distributed .footer-right {
          width: 30%;
      }
      
      .footer-distributed .footer-company-about {
          line-height: 20px;
          color: #ffffff;
          font-size: 13px;
          font-weight: normal;
          margin: 0;
          text-align: justify;
      }
      
      .footer-distributed .footer-company-about span {
          display: block;
          color: black;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
      }
      
      .footer-distributed .footer-icons {
          margin-top: 25px;
      }
      
      .footer-distributed .footer-icons a {
          display: inline-block;
          width: 35px;
          height: 35px;
          cursor: pointer;
          background-color: #33383b;
          border-radius: 2px;
      
          font-size: 20px;
          color: #ffffff;
          text-align: center;
          line-height: 35px;
      
          margin-right: 3px;
          margin-bottom: 5px;
      }
      
      @media (max-width: 768px) {
        .footer-distributed h3 span {
          margin-right: 0;
        }
      
        .footer-distributed .footer-left p {
          text-align: center;
        }
      
        .footer-distributed .footer-left,
        .footer-distributed .footer-center,
        .footer-distributed .footer-right {
          display: block;
          width: 100%;
          margin-bottom: 40px;
          text-align: center;
        }
      
        .footer-distributed .footer-center i {
          margin-left: 0;
        }
      }
      @media (max-width: 500px) {
        .footer-distributed h3 span {
          margin-right: 0;
        }
      
        .footer-distributed .footer-left p {
          text-align: center;
        }
      
        .footer-distributed .footer-left,
        .footer-distributed .footer-center,
        .footer-distributed .footer-right {
          display: block;
          width: 100%;
          margin-bottom: 40px;
          text-align: center;
        }
      
        .footer-distributed .footer-center i {
          margin-left: 0;
        }
      }
        </style>
        <footer class="footer-distributed" id="tentang">
  <div class="footer-left">
    <img src="https://i.ibb.co/89cKpPc/Untitled-1.png" />
    <h3><span>Your Random Recipe</span></h3>
    <br />
    <p class="footer-company-about">Pagar Alam, Sumatera Selatan</p>
    <br />
    <p class="footer-company-name">©2020 Yogi Surya Pranata.</p>
  </div>

  <div class="footer-center">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span>Jln. Nurdin Panji, Belakang PU</span> Pagar Alam - 31173</p>
    </div>

    <div>
      <i class="fa fa-phone"></i>
      <p>+6281274627547</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p>
        <a href="mailto:birulangit1996@gmail.com">birulangit1996@gmail.com</a>
      </p>
    </div>
  </div>
  <div class="footer-right">
    <p class="footer-company-about">
      <span>Alasan Saya Membuat Web Ini</span>
      Sering sekali kita bingung ketika lagi lapar atau ingin memasak namun bingung dalam
      menentukan makanannya, website ini membantu kita untuk menampilkan resep
      makanan secara acak menggunakan API dari MealDB.
    </p>
  </div>
</footer>`;
  }
}

customElements.define("footer-bar", Footer);