import "./About.css";

function About(props) {
    console.log(props);
    return (
    <div className="about_container">
        <span>
            "Freedom is the freedom to say that two plus two make four. If that i 
            granted, all else follows."
        </span>
        <sapn>George Orwell, 1984</sapn>
    </div>
    );
}

export default About;