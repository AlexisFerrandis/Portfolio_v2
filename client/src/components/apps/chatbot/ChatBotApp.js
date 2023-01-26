import { useState } from "react";
import "./styles/index.scss";

// import bot from "./assets/robot-solid.svg";
import send from "./assets/paper-plane-solid.svg";

const ChatBotApp = () => {
	const [error, setError] = useState(false);	
    const [userMessage, setUserMessage] = useState("");

    const handleSubmit =() => {
        console.log("j");
    }
    return (
        <div className="chatbot-app" id="chatbot">
            <div className="chatbot-content" >
                <div id="chatArea">
                    <div className="bot box">
                        {/* <img src={bot} alt="T.bot" /> */}
                        <div className="img">🤖</div>
                        <div className="msg-display">
                            <p>Bien le bonjour.</p>
                        </div>
                    </div>
                </div>
                <div className="suggestions">
                    {/* {suggestions && (
                        <>
                            <button onClick={handleSuggestion}>Hello</button>
                            <button onClick={handleSuggestion}>Comment ca va?</button>
                        </>
                    )} */}
                </div>

                <div className="text-input">
                    {error && <p className="error">message incorrect</p>}
                    <input name="userMessage" type="text" placeholder="Message" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} onKeyDown={handleSubmit} />
                    <button type="button" onClick={handleSubmit}>
                        <img src={send} alt="envoyer" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBotApp;