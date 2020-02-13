import React from 'react';
import '../style/components.scss'
import CvCard from './CvCard';

class ArticleBody extends React.Component {
    render() {
        return (
            <article>
                <section>
                    <h2>Title</h2>
                    <p className="underborder">
                        Content aldskflksdjfløksjdfløksdjf
                    </p>
                    <CvCard/>
                </section>
            </article>
        );
    }
}


export default ArticleBody;