export default function Contact() {
    return (
        <div>
            <h2>Contact</h2>
            <form>
                <p>Name:</p>
                <input/>
                <p>Email:</p>
                <input/>
                <p>Message:</p>
                <textarea className="message"/>
            </form>
            <button>Submit</button>
        </div>
    );
}