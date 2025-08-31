// import './Home.css';

const Home = () =>{
    const quickLinks = [
        {
            id: 1,
            title: "Get started",
            desc: "Read our getting started guide to get the most out of your subscription.",
        },
        {
            id: 2,
            title: "Community",
            desc: "Join the conversation on our exclusive community on Slack.",
        },
        {
            id: 3,
            title: "Visit website",
            desc: "Keep up with our latest content on the website.",
        },
        ];

        const posts = [
        {
            id: 1,
            date: "Apr 18, 2024",
            title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
            desc: "We are increasing the duration of our Fixed Income portfolio to reflect the current macro conditions...",
            link: "#",
        },
        {
            id: 2,
            date: "Apr 05, 2024",
            title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
            desc: "Craftsman Automation excels in making precise parts for cars and machines...",
            link: "#",
        },
        {
            id: 3,
            date: "Apr 03, 2024",
            title: "The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review",
            desc: "FY24 brought us a 42% gain in our Focused portfolio, outperforming the Nifty’s 29%...",
            link: "#",
        },
        {
            id: 4,
            date: "Mar 27, 2024",
            title: "A Small CAD for India, Yet Again",
            desc: "India’s Current Account Deficit is a mere 10 bn in the quarter, less than a decade back...",
            link: "#",
        },
        {
            id: 5,
            date: "Apr 18, 2024",
            title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
            desc: "We are increasing the duration of our Fixed Income portfolio to reflect the current macro conditions...",
            link: "#",
        },
        {
            id: 6,
            date: "Apr 05, 2024",
            title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
            desc: "Craftsman Automation excels in making precise parts for cars and machines...",
            link: "#",
        },
        {
            id: 7,
            date: "Apr 03, 2024",
            title: "The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review",
            desc: "FY24 brought us a 42% gain in our Focused portfolio, outperforming the Nifty’s 29%...",
            link: "#",
        },
        {
            id: 8,
            date: "Mar 27, 2024",
            title: "A Small CAD for India, Yet Again",
            desc: "India’s Current Account Deficit is a mere 10 bn in the quarter, less than a decade back...",
            link: "#",
        },
        ];


    return (
      <div className="home-container">
        <h2>Home</h2>
      <div className="quick-links">
        {quickLinks.map((item) => (
          <div key={item.id} className="quick-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Latest posts */}
      <h2 className="section-title">Latest Posts</h2>

      <div className="posts-grid">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <span className="post-date">{post.date}</span>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-desc">{post.desc}</p>
            <a href={post.link} className="post-link">
              Read full post
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Home;
