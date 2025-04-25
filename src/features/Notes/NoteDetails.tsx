import Background from "../../assets/pink.png";

interface NoteDetailsProps {
    onClose: () => void;
}

const NoteDetails = ({  onClose }: NoteDetailsProps) => {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div 
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={onClose}
            ></div>
            
           <div className="relative z-10">
                <div
                    className="relative h-[23rem] justify-center w-[25rem] overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${Background})`,
                    }}
                >
                    <button 
                        className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 z-20"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                    <div className="absolute h-[16rem] rounded-lg w-[17rem] top-[3.2rem] left-[5rem] inset-0 bg-white bg-opacity-60 p-4 flex flex-col text-left justify-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-nabuya text-pink-700 text-4xl">
                            HELLO
                        </h2>
                        <p className="text-gray-700 font-nabuya text-2xl">Hello </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoteDetails;
