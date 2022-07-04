import user from "../../assets/user.jpeg"
import sendMessage from "../../assets/sendMessage.svg"
import "./styles.css"

function Chatbot() {

  return (
    <div id="page">
        <header className="cabecalho">
          <img src={user}/>
          <p className="pi">Rhian</p>
          <p className="pii">Online</p>
        </header>
        <div className="structure">
          <p>
            
          </p>
        </div>
        <div className="sendArea">
          <input type="text"></input>
          <button type="submit"><img src={sendMessage}/></button> 
        </div>
    </div>
  )
}

export default Chatbot
