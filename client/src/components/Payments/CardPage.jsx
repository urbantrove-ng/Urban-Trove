import { useNavigate } from "react-router-dom";

const CardPage = () => {
  const updateCardHolderName = (value) => {
    document.querySelector('.div-16').textContent = value;
  };

  const updateCardNumber = (value) => {
    document.querySelector('.div-12').textContent = value;
  };

  const updateExpiryDate = (value) => {
    document.querySelector('.div-19').textContent = value;
  };

  const updateCVV = (value) => {
    // CVV is typically not displayed on the card face for security reasons
    console.log('CVV updated:', value);
  };

  const saveCard = () => {
    console.log('Card saved');
    // Implement card saving logic here
  };

  const navigate = useNavigate();

  const back =() => {
    navigate("./PaymentMethod")
  }
  const addCard = () => {
    console.log('Add card clicked');
    // Implement add card logic here
  };


  return (
    <div className="div" style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 80px 80px 37px' }}>
      <header className="flex gap-5 w-full text-3xl font-medium text-center max-w-[1030px] text-neutral-900 max-md:flex-wrap max-md:max-w-full">
      <button>
            onClick={back}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d174aadbb7a92fdf6681467e4c46a97d0df60aa3753c024337e48e28f12e92da?apiKey=7b5e2482ca0b4f478aab41d134efc02a&"
          className="shrink-0 aspect-[1.02] fill-white w-[60px]"
          alt="Payment icon"
        />
        </button>
      </header>
      <section className="div-4" style={{ marginTop: '111px', width: '100%', maxWidth: '1164px' }}>
        <div className="div-5" style={{ gap: '20px', display: 'flex' }}>
          <div className="column" style={{ display: 'flex', flexDirection: 'column', lineHeight: 'normal', width: '50%', marginLeft: '0px' }}>
            <div className="div-6" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="div-7" style={{ display: 'flex', gap: '3px' }}>
                <div className="div-8" style={{ borderRadius: '14.01px', background: 'linear-gradient(88deg, #647c0c 3.83%, #282d16 87.25%)', display: 'flex', flexDirection: 'column', flexGrow: '1', flexBasis: '0', width: 'fit-content', padding: '16px 0 43px' }}>
                  <div className="div-9" style={{ alignSelf: 'end', display: 'flex', marginRight: '23px', width: '69px', flexDirection: 'column' }}>
                    <img loading="lazy" src="Vector2.png" className="img-2" style={{ aspectRatio: '1.61', objectFit: 'auto', objectPosition: 'center', width: '100%', fill: '#fff', alignSelf: 'center' }} />
                    <div className="div-10" style={{ borderRadius: '7.005px', backgroundColor: 'rgba(255, 255, 255, 0.13)', marginTop: '43px', height: '48px' }}></div>
                  </div>
                  <div className="div-11" style={{ display: 'flex', marginTop: '8px', flexDirection: 'column', color: '#fff', padding: '0 36px' }}>
                    <div className="div-12" style={{ font: '700 32px DM Sans, sans-serif' }}>5653 4389 6453 9800</div>
                    <div className="div-13" style={{ display: 'flex', marginTop: '28px', alignItems: 'start', gap: '20px', justifyContent: 'space-between', padding: '0 1px' }}>
                      <div className="div-14" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="div-15" style={{ font: '400 16px DM Sans, sans-serif' }}>Card Holder Name</div>
                        <div className="div-16" style={{ marginTop: '16px', font: '700 24px DM Sans, sans-serif' }}>Fatima Yusuf</div>
                      </div>
                      <div className="div-17" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="div-18" style={{ font: '400 16px DM Sans, sans-serif' }}>Expiry Date</div>
                        <div className="div-19" style={{ marginTop: '10px', font: '700 24px DM Sans, sans-serif' }}>06/28</div>
                      </div>
                      <img loading="lazy" src="Vector1.png" className="img-3" style={{ aspectRatio: '1.27', objectFit: 'auto', objectPosition: 'center', width: '38px', fill: '#fff', marginTop: '20px' }} />
                    </div>
                  </div>
                  <div className="div-20" style={{ borderRadius: '7.005px', backgroundColor: 'rgba(255, 255, 255, 0.13)', width: '33px', height: '35px', margin: 'auto 0' }}></div>
                </div>
                <button className="div-21" onClick={saveCard} style={{ alignSelf: 'start', display: 'flex', gap: '15px', fontSize: '24px', color: '#000', fontWeight: '500', letterSpacing: '0.2px', lineHeight: '83%', margin: '82px 0 0 13px', background: 'none', border: 'none', cursor: 'pointer' }}>
                  <label className="container" style={{ display: 'block', position: 'relative', margin: '40px 0', paddingLeft: '35px', cursor: 'pointer', fontSize: '22px', WebkitUserSelect: 'none', MozUserSelect: 'none', MsUserSelect: 'none', userSelect: 'none' }}>
                    <input type="checkbox" checked="checked" style={{ position: 'absolute', opacity: '0', cursor: 'pointer', height: '0', width: '0' }} />
                    <span className="checkmark" style={{ borderRadius: '8px', position: 'absolute', top: '0', left: '0', height: '25px', width: '25px', backgroundColor: '#eee' }}></span>
                    <div className="div-22" style={{ fontFeatureSettings: 'clig off, liga off', fontFamily: 'DM Sans, sans-serif', flexGrow: '1', flexBasis: 'auto', margin: 'auto 0' }}>Save Card</div>
                  </label>
                </button>
              </div>
            </div>
          </div>
          <div className="column-2" style={{ display: 'flex', flexDirection: 'column', lineHeight: 'normal', width: '50%', marginLeft: '20px' }}>
            <div className="div-23" style={{ display: 'flex', flexGrow: '1', flexDirection: 'column' }}>
              <div className="div-24" style={{ color: '#000', alignSelf: 'start', marginLeft: '23px', font: '400 20px DM Sans, sans-serif' }}>Card Holder Name</div>
              <input type="text" className="div-25" value="Fatima Yusuf" onChange={(e) => updateCardHolderName(e.target.value)} style={{ borderRadius: '100px', borderColor: 'rgba(238, 238, 238, 1)', borderStyle: 'solid', borderWidth: '1px', backgroundColor: '#fff', marginTop: '26px', alignItems: 'start', color: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center', padding: '36px 49px', font: '700 24px DM Sans, sans-serif' }} />
              <div className="div-26" style={{ color: '#000', alignSelf: 'start', margin: '38px 0 0 23px', font: '400 20px DM Sans, sans-serif' }}>Card Number</div>
              <input type="text" className="div-27" value="5653 4389 6453 9800" onChange={(e) => updateCardNumber(e.target.value)} style={{ borderRadius: '100px', borderColor: 'rgba(238, 238, 238, 1)', borderStyle: 'solid', borderWidth: '1px', backgroundColor: '#fff', marginTop: '28px', alignItems: 'start', color: '#000', justifyContent: 'center', padding: '36px 41px', font: '700 24px DM Sans, sans-serif' }} />
              <div className="div-28" style={{ marginTop: '33px' }}>
                <div className="div-29" style={{ gap: '20px', display:

 'flex', alignSelf: 'start', justifyContent: 'start' }}>
                  <div className="div-30" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <div className="div-31" style={{ color: '#000', font: '400 20px DM Sans, sans-serif' }}>Expiry Date</div>
                    <input type="text" className="div-32" value="06/28" onChange={(e) => updateExpiryDate(e.target.value)} style={{ borderRadius: '100px', borderColor: 'rgba(238, 238, 238, 1)', borderStyle: 'solid', borderWidth: '1px', backgroundColor: '#fff', marginTop: '25px', alignItems: 'start', color: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center', padding: '36px 39px', font: '700 24px DM Sans, sans-serif' }} />
                    <div className="div-33" style={{ color: '#000', margin: '24px 0 0 0', font: '400 20px DM Sans, sans-serif' }}>CVV</div>
                    <input type="text" className="div-34" onChange={(e) => updateCVV(e.target.value)} style={{ borderRadius: '100px', borderColor: 'rgba(238, 238, 238, 1)', borderStyle: 'solid', borderWidth: '1px', backgroundColor: '#fff', marginTop: '26px', alignItems: 'start', color: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center', padding: '36px 41px', font: '700 24px DM Sans, sans-serif' }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="div-35" style={{ display: 'flex', alignSelf: 'start', marginTop: '62px', marginLeft: '23px' }}>
              <button className="div-36" onClick={addCard} style={{ borderRadius: '100px', background: 'linear-gradient(88deg, #647c0c 3.83%, #282d16 87.25%)', color: '#fff', fontSize: '28px', fontWeight: '500', letterSpacing: '0.2px', lineHeight: '96%', padding: '36px 40px', cursor: 'pointer', alignItems: 'start', display: 'flex', gap: '15px' }}>
                <div className="container-2" style={{ alignSelf: 'center', display: 'block', position: 'relative', paddingLeft: '35px', cursor: 'pointer', fontSize: '22px', WebkitUserSelect: 'none', MozUserSelect: 'none', MsUserSelect: 'none', userSelect: 'none' }}>
                  <span className="checkmark-2" style={{ borderRadius: '8px', position: 'absolute', top: '0', left: '0', height: '25px', width: '25px', backgroundColor: '#eee' }}></span>
                </div>
                <div className="div-37" style={{ fontFeatureSettings: 'clig off, liga off', fontFamily: 'DM Sans, sans-serif', flexGrow: '1', flexBasis: 'auto' }}>Add Card</div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardPage;


