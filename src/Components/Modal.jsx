import AppContext from "../Context";
import { useContext } from "react";

const Modal = () => {

    const { accepted, setAccepted } = useContext(AppContext)
    
    
    const acceptButtonClick = () => {
        setAccepted(!accepted)
    }

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <div className="title-container">
                    <h2>Ankara Gelişim Tarama Envanteri</h2>
                </div>
                <div className="disclaimer-container">
                    <p>0-6 yaş arasındaki çocukların gelişimsel açıdan değerlendirilebilmesi amacıyla uygulanan bir envanterdir. Envanter, gelişiminde “görülen” bir aksama olmayan çocuklarda, olası gelişimsel sorunları saptamak ve önlem almak amacıyla kullanılır. Bebek ve çocukların gelişimi ile ilgili derinlemesine ve sistemli bilgi sağlayan bir değerlendirme aracıdır.</p>
                    <p>Işık Savaşır, Nilhan Sezgin ve Neşe Erol tarafından 0-6 yaş arası çocukları değerlendirmek için 1993 yılında geliştirilmiştir. Çocukların gelişimsel açıdan değerlendirilebilmesi amacıyla uygulanan bir envanterdir. Çocuk ruh sağlığı alanında çalışan Psikologlar tarafından uygulanmaktadır.</p>
                    <p>Bu uygulama tamamen test amaçlı yazılmıştır ve hiçbir ticari faaliyette kullanılması uygun değildir. Tüm hakları yasal sahiplerine aittir ve herhangi bir ticari faaliyette ya da amacının dışında kullanılması durumunda tüm sorumluluk kullanıcıya aittir!</p>
                </div>
                <div className="button-container">
                    <button id="accept-button" onClick={acceptButtonClick}>Kabul et!</button>
                </div>

            </div>
        </div>
    )

}






export default Modal