import CountyTestimonials, {
  type CountyTestimonial,
} from "./CountyTestimonials";

const homeTestimonials: CountyTestimonial[] = [
  {
    name: "Chris and Vicky Smith",
    quote:
      "I was referred to Eddie through my sister-n-law. I had tried a previous company but wasn't satisfied. I have been extremely happy with Eddie's mortgage team. Everything was done online through emails. This was very helpful as both my husband and I work full time during the day and really have no time to do this. Emails were responded to on a daily basis and in a very quick manner. Every step of the process was done very professionally and friendly. I always hesitated to do a refinance because of the large amount of paperwork and meetings. But this didn't happen that way. I highly recommend Eddie's mortgage team for your refinancing needs.",
    attribution: "Chris and Vicky Smith, Avondale, Arizona",
  },
  {
    name: "Elizabeth Todd",
    quote:
      "Eddie and his team are fantastic to work with! They are efficient, friendly and very professional. They communicate to all parties in the transaction; making it a very smooth transaction every time. As a real estate agent, this makes my job that much easier when I have a lender who always performs and most of the time is even ahead of schedule. I can't say enough good things about Eddie as a mortgage lender!",
    attribution: "Elizabeth Todd – H2 Realty, Phoenix, Arizona",
  },
  {
    name: "Marleen Kapanicas",
    quote:
      "My husband and I would like to thank you for an outstanding job you did with our refinance. You are so knowledgeable and kept us updated on each step of the way. Your professionalism was impeccable and your timing was perfect. As you know, I am a Realtor and have dealt with many mortgage people along my career. You are heads and shoulders beyond most I have worked with. Your communication skills are unique in this business. You were reassuring throughout this entire procedure. I just want you to know I will be proud to refer you to my family, friends and Clients.",
    attribution: "Marleen Kapanicas – Homesmart, Scottsdale, Arizona",
  },
  {
    name: "Thomas and Carol Milberry",
    quote:
      "Our mortgage service through Eddie Knoell was seamless throughout. It was like having someone watch over the process without us having any concern in the process. All questions were answered promptly and completely with the correct issues addressed without extra fanfare, like dealing with a trusted family member. Thanks again Eddie!!!",
    attribution: "Thomas and Carol Milberry, Queen Creek, Arizona 85242",
  },
  {
    name: "Nancy Perry",
    quote:
      "I met Eddie Knoell in 2012 through a client. He communicates very well, through every step of the process. Before I can even start to wonder what is going on, he's picked up the phone and called to let me know where we are in the process. He closes every deal and communicates through it well. He's patient with the questions and great with every client I have sent his way.",
    attribution: "Nancy Perry – Solutions Real Estate, Avondale, Arizona",
  },
];

export default function Reviews() {
  return (
    <CountyTestimonials
      title="What Our Clients Are Saying"
      testimonials={homeTestimonials}
    />
  );
}
