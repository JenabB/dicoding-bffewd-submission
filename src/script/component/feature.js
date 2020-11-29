class Feature extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
            <style>
            section {
              display: block;
            }
            .page-section {
              padding: 6rem 0 0 0;
              width: 90%;
              max-width: 800px;
              margin: 0px auto;
              margin-top: 60px;
            }
            .page-section h2.section-heading {
              text-align: center;
              font-size: 2.5rem;
              margin-top: 0;
              margin-bottom: 0;
            }
            .page-section h3.section-subheading {
              text-align: center;
              font-size: 1rem;
              font-weight: 400;
              font-style: italic;
              font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            }
            
            @media (min-width: 768px) {
              section {
                padding: 9rem 0;
              }
            }
            ::-moz-selection {
              background: #fed136;
              text-shadow: none;
            }
            
            ::selection {
              background: #fed136;
              text-shadow: none;
            }
            
            .flex-container {
              display: flex;
              align-items: flex-start;
              justify-content: center;
              width: 100%;
              background-color: white;
              padding: 10px 20px 20px 20px;
              box-sizing: border-box;
              flex-wrap: wrap;
              z-index: 1;
            }
            
            .flexcard {
              overflow: hidden;
              margin-top: 20px;
              margin-left: 30px;
              border-radius: 10px;
            }
            
            #gambar-flex {
              width: 130px;
            }
  
            .item-1 {
              font-size: 8pt;
              text-align: center;
              margin-top: 75px;
            }
  
            .item-1 h1 {
              margin-top: 50px;
            }
  
            .item-2 {
              font-size: 8pt;
              text-align: center;
            }
  
            .item-3 {
              font-size: 8pt;
              margin-top: 37px;
              text-align: center;
            }
            </style>
            <!-- Services-->
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                </section>
        <div class="flex-container">
          <div class="flexcard item-1">
              <img id="gambar-flex"
                src="https://i.ibb.co/DgBRfBC/Icon1.png"
                 alt="item-2" />
                 <h1>Over 200 Recipes</h1>
                 <p>Various Ingredients<br>like Chicken, Beef, Salmon, Avocado and many more</p>
          </div>
  
          <div class="flexcard item-2">
              <img id="gambar-flex"
                src="https://i.ibb.co/dm6M2h5/Icon2.png"
                 alt="item-2" />
                 <h1>From 16 Different Countries</h1>
                 <p>Various recipe from around the world<br>Including American, Asian, Middle-East and European</p>
          </div>
  
          <div class="flexcard item-3">
              <img id="gambar-flex"
                src="https://i.ibb.co/LS985Rf/Icon3.png"
                 alt="icon-3" />
                 <h1>Always Up to Date</h1>
                 <p>New recipe database form Partrean Supporters</p>
          </div>
        </div>`;
  }
}

customElements.define("feature-bar", Feature);
