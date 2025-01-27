import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <p>Github Profile: </p>
            <a href="https://github.com/fluviangumbo">
                <FaGithubSquare />
            </a>
            <p>LinkedIn Profile: </p>
            <a href="https://www.linkedin.com/in/joel-roney-099983161/">
                <FaLinkedin />
            </a>
        </footer>
    )
}