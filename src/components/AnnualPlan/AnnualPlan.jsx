import iconMusicImage from "../../assets/icon-music.svg"
import "./AnnualPlan.css"

const AnnualPlan = () => {
    return (
    <div className="annual-plan-section">
        <div className="second-section">
            <img alt="Icon Music" src={iconMusicImage} />
            <div className="price-section">
                <span>Annual Plan</span>
                <span>$59.99/year</span>
            </div>
        </div>
        <span>Change</span>
    </div>
    )
}

export default AnnualPlan