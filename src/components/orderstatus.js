import React from 'react'

export default function OrderStatusComponent() {
    return (
        <div>
            <h1 className="recent"> Most recent order</h1>
            <div className="item_details">
                <div className="item">
                    <img src={require('./assets/iphonexr.jpeg')} />
                </div>
                <div className="delivery_status">
                    <div className="grid-container">
                        <div className="grid-item itemnew status_d"><img className="icon" src={require('./assets/home.png')} /></div>
                        <div className="grid-item hide">2</div>
                        <div className="grid-item hide">3</div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="notes">
                            <p> 26,Aug,2020</p>
                            <h4><b>Iphonexr</b></h4>
                            <p>QTY:1</p>
                        </div>

                    </div>
                </div>

            </div>
            <h1 className="recent"> InProgress order</h1>
            <div className="item_details_pr">
                <div className="item">
                    <img src={require('./assets/iphonexr.jpeg')} />
                </div>
                <div className="delivery_status">
                    <div className="grid-container">
                        <div className="grid-item itemnew status"><img className="icon" src={require('./assets/package.png')} /></div>
                        <div className="grid-item itemnew"><img className="icon" src={require('./assets/shipped.png')} /></div>
                        <div className="grid-item itemnew"><img className="icon" src={require('./assets/home.png')} /></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="grid-item"></div>
                        <div className="notes">
                            <p>Expected to shift: 26,Aug,2020</p>
                            <h4><b>Iphonexr</b></h4>
                            <p>QTY:1</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
