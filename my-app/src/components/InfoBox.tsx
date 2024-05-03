import React from 'react';


interface InfoBoxProps {
    data: { name: string; info: string; backgroundColor: string; type: string } | null;
}




const InfoBox: React.FC<InfoBoxProps> = ({ data }) => {
    if (!data) return null;

    const handleButtonClick = () => {
        if (data) {
            const exhibitUri = data.name.replace(/\s/g, '-').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
            window.location.href = `https://vida.cz/expozice/${exhibitUri}`;
        }
    };

    return (
        <div style={{ position: 'relative', width: 'fit-content', maxWidth: '80%', padding: '10px', borderRadius: '8px', boxShadow: '1 2px 4px rgba(0, 0, 0, 0.1)', zIndex: 3 }}>
            <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>{data.name}</div>
            <div>{data.info}</div>

            {data.backgroundColor && (
                <div style={{ zIndex: -1, position: 'absolute', width: '100%', height: '100%', backgroundColor: data.backgroundColor, top: 0, left: 0, opacity: 0.2, borderRadius: '8px' }} />
            )}


            {data.type === "expozice" && (
                <button
                    onClick={handleButtonClick}
                    style={{
                        zIndex: 3,
                        marginTop: '5px',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        backgroundColor: data.backgroundColor,
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Exponáty
                </button>
            )}

        </div>
    );
}

export default InfoBox;
