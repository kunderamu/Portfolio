import React from 'react';

const projects = [
  {
    title: 'Image Classification',
    tech: 'Python, Pandas, Keras, CNN, TensorFlow',
    link: 'https://image-classification-vyytjjsrq9awmnqckhtdd2.streamlit.app/',
    description: [
      'Developed a CNN to classify images of cats and dogs using the Kaggle dataset.',
      'Designed deep learning architecture with Dense, Dropout, and ReLU/Sigmoid activations.',
      'Tested various optimizers and functions to improve classification accuracy.',
      'Evaluated the model using precision, recall, and accuracy for robust pet image classification.',
    ],
  },
  {
    title: 'Seoul Bike Rental Prediction',
    tech: 'Python, Pandas, Scikit-learn, Matplotlib',
    description: [
      'Built an end-to-end regression pipeline to predict bike rental demand.',
      'Performed preprocessing, EDA, and feature engineering.',
      'Compared Ridge, Decision Tree, and Random Forest Regressors with hyperparameter tuning.',
      'Evaluated models using RMSE and R² to find the best-performing algorithm.',
    ],
  },
  {
    title: 'Genre Classification using NLP',
    tech: 'Python, Pandas, Scikit-learn, NLTK, TF-IDF',
    description: [
      'Built an NLP pipeline to classify movie genres based on user reviews.',
      'Performed tokenization, stop word removal, and stemming for text cleaning.',
      'Used TF-IDF and trained Logistic Regression; evaluated with accuracy and confusion matrix.',
      'Developed a prediction function for OTT content categorization.',
    ],
  },
  {
    title: 'Telangana Tourism Website',
    tech: 'HTML5, CSS, JavaScript',
    description: [
      "Developed a tourism website to showcase Telangana's tourist spots.",
      'Includes time, location, and image details for each place.',
      'Tourist spots categorized district-wise.',
      'Responsive design using HTML, CSS, and JavaScript.',
    ],
  },
];

const Projects = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Projects</h1>
      {projects.map((project, index) => (
        <div key={index} style={styles.card}>
          <h2 style={styles.title}>{project.title}</h2>
          <p style={styles.tech}><strong>Tech Stack:</strong> {project.tech}</p>

          {project.link && (
            <p style={{ marginBottom: '1rem' }}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'lime', textDecoration: 'underline' }}
              >
                View Live Project
              </a>
            </p>
          )}

          <ul>
            {project.description.map((point, i) => (
              <li key={i} style={styles.list}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    color: 'white',
    backgroundColor: 'grey',
    minHeight: '100vh',
    padding: '2rem',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '2rem',
    textAlign: 'center',
    color: 'black',
  },
  card: {
    border: '2px solid red',
    borderRadius: '10px',
    padding: '1.5rem',
    marginBottom: '2rem',
    backgroundColor: '#111',
    boxShadow: '0 0 10px red',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
    color: 'red',
  },
  tech: {
    fontSize: '1rem',
    marginBottom: '1rem',
    color: '#f0f0f0',
  },
  list: {
    marginBottom: '0.5rem',
    lineHeight: '1.5',
    color: 'white',
  },
};

export default Projects;
