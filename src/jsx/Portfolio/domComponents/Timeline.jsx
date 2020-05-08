import React, {Component} from "react";
import '../../../scss/timeline.scss';

function Timeline() {

    return (
        <div className="container-fluid timeline ">
            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <h4 className="display-4">Education</h4>
                    <div className="row-cols-1 school">
                        <div className="entry">
                            <span className="timeline__id"></span>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">school education at Willstätter Gymnasium
                                        Nuremberg</h5>
                                    <p className="card-text lead"> August 2009 - July 2014</p>
                                </div>
                            </div>
                        </div>
                        <div className="entry">
                            <span className="timeline__id"></span>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> school education at Wagenburg Gymnasium
                                        Stuttgart</h5>
                                    <p className="card-text lead"> August 2014 - July 2017, Abitur</p>
                                </div>
                            </div>
                        </div>
                        <div className="entry">
                            <span className="timeline__id"></span>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Bachelor's degree (B.A) at Universität Stuttgart in
                                        Philosophy</h5>
                                    <p className="card-text lead"> September 2017 - July 2018</p>
                                </div>
                            </div>
                        </div>
                        <div className="entry">
                            <span className="timeline__id"></span>
                            <div className="card last">
                                <div className="card-body">
                                    <h5 className="card-title">Bachelor's degree (B.Sc) at Hochschule der Medien
                                        Stuttgart in
                                        Software
                                        Engineering and Media</h5>
                                    <p className="card-text lead"> September 2018 - expected 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none d-lg-block imgSpace">
                    </div>
                </div>

                <div className="col-lg-6 col-md-12 ">
                    <div className="d-none d-lg-block imgSpace">
                    </div>
                    <h4 className="display-4">Work</h4>
                    <div className="row-cols-1 work">
                        <div className="entry">
                            <span className="timeline__id"></span>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> Sushichef at "Tokyo Restaurant" in Stuttgart</h5>
                                    <p className="card-text lead">October 2014 - July 2017</p>
                                    <p className="card-text"> To freshen up my pocket money I started working as a
                                        sushi chef during
                                        my higschool time. This is how I gained my first experience in the
                                        gastronomy and in a
                                        handicraft field of work.</p>
                                </div>
                            </div>
                        </div>
                        <div className="entry">
                            <span className="timeline__id"></span>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title"> Waiter at "Cafe Le Theatre Bar und Restaurant" in
                                        Stuttgart</h5>
                                    <p className="card-text lead">July 2017 - April 2018</p>
                                    <p className="card-text"> After graduating from high school, I decided to move
                                        in different
                                        directions and therefore worked full-time as a service and bar worker to
                                        test different
                                        job profiles. The constant influx of customers taught me how to deal with
                                        stressful
                                        situations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="entry">
                            <span className="timeline__id"></span>
                            <div className="card last">
                                <div className="card-body">
                                    <h5 className="card-title"> Waiter at "Hans Im Glück Restaurant" in
                                        Stuttgart</h5>
                                    <p className="card-text lead">April 2019 - April 2020</p>
                                    <p className="card-text"> Since April 2019 I work as a temp to finance my
                                        studies. The direct
                                        contact with guests improves my communication skills and my soft skills with
                                        customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;