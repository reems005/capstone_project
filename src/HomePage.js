import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Welcome to Little Lemon</h1>
      <p>We're a fast-food chain that believes in using fresh, locally-sourced ingredients to make delicious and healthy meals.</p>
      <button>Order Now</button>
    </section>
  );
};

const MenuSection = () => {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <ul>
        <li>
          <img src="burger.jpg" alt="Burger" />
          <h3>Burgers</h3>
          <p>Our burgers are made with 100% grass-fed beef and fresh vegetables.</p>
        </li>
        <li>
          <img src="salad.jpg" alt="Salad" />
          <h3>Salads</h3>
          <p>Our salads are made with locally-sourced greens and vegetables, and come with a variety of dressings.</p>
        </li>
        <li>
          <img src="smoothie.jpg" alt="Smoothie" />
          <h3>Smoothies</h3>
          <p>Our smoothies are made with fresh fruits and vegetables, and can be customized to your liking.</p>
        </li>
      </ul>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="about">
      <h2>About Us</h2>
      <p>We started Little Lemon with a simple goal: to provide delicious, healthy fast food using locally-sourced ingredients. We believe that everyone should have access to good food that's good for you.</p>
      <button>Learn More</button>
    </section>
  );
};

const TestimonialsSection = () => {
    return (
      <section className="testimonials">
        <h2 className="testimonials-heading">What Our Customers Are Saying</h2>
        <ul className="testimonials-list">
          <li>
            <img src="person1.jpg" alt="Person 1" className="testimonials-image" />
            <p className="testimonials-quote">"I've never had a burger this good. I didn't even feel guilty about eating fast food!"</p>
            <h4 className="testimonials-name">Jane Doe</h4>
          </li>
          <li>
            <img src="person2.jpg" alt="Person 2" className="testimonials-image" />
            <p className="testimonials-quote">"I love how fresh and healthy the salads are. They're the perfect lunch!"</p>
            <h4 className="testimonials-name">John Smith</h4>
          </li>
          <li>
            <img src="person3.jpg" alt="Person 3" className="testimonials-image" />
            <p className="testimonials-quote">"The smoothies are amazing. I've never tasted anything like them before."</p>
            <h4 className="testimonials-name">Jane Smith</h4>
          </li>
        </ul>
      </section>
    );
  };


export { HeroSection, MenuSection, AboutSection, TestimonialsSection };
