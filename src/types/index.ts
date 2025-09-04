export interface Service {
  id: number;
  title: string;
  image: string;
  icon: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  profession: string;
  image: string;
  text: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuoteForm {
  name: string;
  email: string;
  mobile: string;
  serviceType: string;
  message: string;
}

export interface Fact {
  id: number;
  number: number;
  label: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}
