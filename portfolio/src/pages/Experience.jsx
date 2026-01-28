import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    return (
        <div className="min-h-screen">
            <div className="text-center">
                <h1 className="text-5xl font-bold">
                    My Journey so far!
                </h1>

                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 184)' }}
                        date="January 2026 - Present"
                        iconStyle={{ background: 'rgb(248, 61, 158)', color: '#fff' }}>

                            <h3 className="vertical-timeline-element-title font-bold">Reseach Assistant</h3>
                            <h4 className="vertical-timeline-element-subtitle">Statesboro, GA</h4>
                            <p>
                            Developed and tested computer vision models for translating sign language into text; processed datasets, extracted keypoints, 
                            and evaluated model accuracy with Mediapipe Hand Detector. 
                            <br/>
                            Trained a Long Short Term Memory (LSTM) model on over 100,000 ASL signs and gestures.
                            </p>

                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="December 2025 - Present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>

                            <h3 className="vertical-timeline-element-title font-bold">Software Engineering Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
                            <p>
                            Assisted development of a cross-platform mobile app using React Native, Redux, and GraphQL 
                            <br/>
                            Implemented backend services with Node.js, Express, and real-time communication via Socket.io. 
                            </p>
                            
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(65, 243, 33)' }}
                        date="April 2025 - Present"
                        iconStyle={{ background: 'rgb(33, 243, 37)', color: '#fff' }}>

                            <h3 className="vertical-timeline-element-title font-bold">Allen E. Paulson College of Engineering and Computing Ambassador</h3>
                            <h4 className="vertical-timeline-element-subtitle">Statesboro, GA</h4>
                            <p>
                            Organized and conducted engineering outreach activities at 20+ schools, providing resources for students interested in 
                            engineering fields. 
                            <br/>
                            Represented the Department of Computer Science and Software Engineering at recruitment and STEM events. 
                            </p>
                            
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(255, 255, 255)', color: '#000000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(243, 33, 33)' }}
                        date="December 2024 - Present"
                        iconStyle={{ background: 'rgb(243, 33, 33)', color: '#fff' }}>

                            <h3 className="vertical-timeline-element-title font-bold">Girls Who Code GSU Chapter President & Founder</h3>
                            <h4 className="vertical-timeline-element-subtitle">Statesboro, GA</h4>
                            <p>
                            Organized and conducted engineering outreach activities at 20+ schools, providing resources for students interested in 
                            engineering fields. 
                            <br/>
                            Represented the Department of Computer Science and Software Engineering at recruitment and STEM events. 
                            </p>
                            
                        </VerticalTimelineElement>
                        


                </VerticalTimeline>
            </div>
        </div>
    )
}