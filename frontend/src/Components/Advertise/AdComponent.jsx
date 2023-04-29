import React from 'react'

const AdComponent = () => {
  // This function runs the Google Adsense script when the component mounts
  const runAds = () => {
    if (typeof window !== 'undefined') {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    }
  }

  React.useEffect(() => {
    runAds()
  }, [])

  return (
    <>
    <style jsx>{`
        .ad-container {
            border: 1px solid #e6e6e6;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 15px;
            max-width: 300px;
          }
          
          .ad-container a {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
          }
          
          .ad-container img {
            object-fit: cover;
          }
          
          .ad-text {
            color: #333;
            font-family: Arial, sans-serif;
            margin-top: 10px;
          }
          
          .ad-text h3 {
            font-weight: bold;
          }
          
          .ad-text p {
            font-size: 14px;
          }
          
          .ad-price {
            color: #f00;
            font-weight: bold;
          }
          
          .ad-discount {
            color: #0f0;
          }
          
    `}</style>
    <div className="ad-container">
      <a href="https://www.amazon.com/iphone-14" target="_blank" rel="noopener noreferrer">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71cSV-RTBSL._AC_SL1500_.jpg"
          alt="iPhone 14"
          width="300"
          height="250"
        />
        <div className="ad-text">
          <h3>iPhone 14 - The best smartphone ever.</h3>
          <p>Experience the power of the A15 Bionic chip, the stunning 6.1-inch OLED display, the amazing 12MP dual camera system, and the long-lasting battery life.</p>
          <div className="ad-price">Rs. 55555/-</div>
          <div className="ad-discount">Buy now and get 10% off.</div>
        </div>
      </a>
    </div>
    </>
  )
}

export default AdComponent