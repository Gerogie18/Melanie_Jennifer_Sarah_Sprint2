const About = () => {
  return (
  <div id="about" className="about">
    <h1>About</h1>
    <h3>Handmade laser cut wooden jewelry</h3>

    <blockquote>
      <p>Junk</p>
      <p className="phonetic">[juhngk]</p>
      <p>n. Newfoundland slang.</p>
      <p>A word to replace &apos;chunk&apos; or &apos;piece&apos;.</p>
      <p>Eg. A junk of wood, or a junk of ice.</p>
    </blockquote>

    <p>Little junks of wood straight from Newfoundland to you!</p>
    <p>Junks of Wood products are made right here in Newfoundland by 
    graphic designer Melanie Adams (who was made right here too!). 
    Each piece is designed by Melanie, then laser cut from oak plywood 
    and painted, varnished, and mounted by hand.</p>
    <p>All earrings are mounted on 316 grade stainless steel and 
    can be worn in sensitive ears. Clip on options are available as well, 
    just ask!</p>

    <div className="img_container">
      <div className="img">
          <img
              src={"../assets/marketingimages/SAlogoArtboard.png"} 
              alt={"product image"} />
      </div>
      </div>
  </div>
  );
  };
  
  export default About;

