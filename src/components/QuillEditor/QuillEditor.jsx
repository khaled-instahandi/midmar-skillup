import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import './QuillEditor.css';

const QuillEditor = ({ label, required = false, customClass, onData,description }) => {
    const [content, setContent] = useState('');
    const editorId = `editor-${Math.random().toString(36).substr(2, 9)}`;
    const editorRef = useRef(null);

    useEffect(() => {
        if (!editorRef.current) {
            const quill = new Quill(`#${editorId}`, {
                theme: 'snow',
                placeholder:`${description ? description : 'Enter a Detailed description'} `,
                modules: {
                    toolbar: [
                        [{ 'header': 1 }, { 'header': 2 }],
                        ['bold', 'italic', 'underline'],
                        ['link', 'image', 'video'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['clean']
                    ]
                }
            });
            quill.on('text-change', handleContentChange);
            editorRef.current = quill;
        }
    }, [editorId]); 

    const handleContentChange = () => {
        const quill = editorRef.current;
        if (quill) {
            const delta = quill.getContents();
            setContent(delta);
            onData && onData(delta);
        }
    };

    return (
        <div className={`quill-container ${customClass}`}>
            <label>{label} {required && <span className="required-mark">*</span>}</label>
            <div className="quill-input">
                <div id={editorId}></div>
            </div>
        </div>
    );
};

export default QuillEditor;
