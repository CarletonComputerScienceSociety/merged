import React from 'react';
import { PrimaryButton } from '../../../shared'

const HomeHeader = () => (
    <div className="home-header">
        <div className="home-header-inner">
            <div className="home-header-title">
                <div className="home-header-title-header">Carleton <span className="home-header-title-header-highlight">Merged.</span></div>
                <div className="home-header-title-body">Built by Carleton students, for Carleton students. Merged is a student run platform that merges together all events and activity from Carletons tech related student groups.</div>
                <PrimaryButton text="Learn More"/>
            </div>
            <div className="home-header-display">
                <div>ok</div>
            </div>
        </div>
    </div>
);

export { HomeHeader };
