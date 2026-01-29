import React from 'react'

export default function upload_image() {
  return (
    <>
       <main>
        <section className="upload_image">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <div className="inside">
                  <div className="image">
                    <img src="images/lr.png" alt="" />
                  </div>
                  <p>You can change this image anytime before submitting.</p>
                 
                </div>
              </div>
              <div className="col2">
                <ul>
                  <li>
                    <div className='left_side'>
                      <h6>Colour <span>(Optional)</span></h6>
                      <p>Example: Beige, Black, Ivory, Pastel Pink</p>
                    </div>
                    <div className='right'>
                      <ul className='circle'>
                        <li className='black'></li>
                        <li className='pinl'></li>
                        <li className='blue'></li>
                        <li className='green'></li>
                        <li className='purple'></li>
                        <li className='orange'></li>
                        <li className='yellow'></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className='left_side'>
                      <h6>Fabric <span>(Optional)</span></h6>
                      <p>Example: Silk, Cotton, Linen, Chiffon</p>
                    </div>
                    <div className='right'>
                      <ul className='circle'>
                        <li className='black'></li>
                        <li className='pinl'></li>
                        <li className='blue'></li>
                        <li className='green'></li>
                        <li className='purple'></li>
                        <li className='orange'></li>
                        <li className='yellow'></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className='left_side'>
                      <h6>Description of your outfit <span>*</span></h6>
                      <p>Tell us about your outfit.
Style, length, fit, sleeves, neckline, embroidery, etc.</p>
                    </div>
                  </li>
                  <li>
                    <div className='left_side'>
                      <h6>Type <span>* </span></h6>
                      <p>Choose the clothing type to show the correct measurement fields.</p>
                    </div>
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </section>
        <section className="sec_select">
          <div className="contain">
            <div className="flex">
              <div className="col1">
                <p>Selected design ready for price determination.</p>
              </div>
              <div className="col2">
                <div className="btn1">
                  <Link href="" className="site_btn trans_btn">
                    Edit description
                  </Link>
                </div>
                <div className="btn2">
                  <Link href="" className="site_btn">
                    Continue
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
