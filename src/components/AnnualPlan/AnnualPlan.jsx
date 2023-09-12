import iconMusicImage from "../../assets/icon-music.svg"
import "./AnnualPlan.css"

const AnnualPlan = () => {
    return (
    <div className="annual-plan-section">
        <div className="second-section">
            <img alt="Icon Music" src={iconMusicImage} />
            <div className="price-section">
                <p>Annual Plan</p>
                <span>$59.99/year</span>
            </div>
        </div>
        <a href="#">Change</a>
    </div>
    )
}

export default AnnualPlan