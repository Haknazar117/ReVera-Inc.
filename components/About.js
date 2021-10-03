import React from 'react'

export default function About() {
    return (
        <div>
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div class="col-10 col-sm-8 col-lg-6">
                    <img src="/about-us.jpg" class="d-block mx-lg-auto img-fluid" style={{borderRadius: 10}}alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                </div>
                <div class="col-lg-6">
                    <h1 class="display-5 fw-bold lh-1 mb-3">About our team</h1>
                    <p class="lead">We are Re Vera Incorporated Company located in the Nur-Sultan, Kazakhstan country. Currently, we are studying at International School of Nur-Sultan, and we are here to propose new solutions and ideas for improving NASA's work. </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
