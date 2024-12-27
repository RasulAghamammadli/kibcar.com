import AnimatedButtonWrapper from "./AnimatedButtonWrapper";

function ForgetPinForm({ car, onCloseModal, sharedData }) {
  return (
    <div className="bg-white rounded-lg  h-[600px] w-[600px]">
      <iframe
        className="!overflow-auto w-[100%] !h-[calc(100%-60px)]"
        src={sharedData}
        id="paytriframe"
        style={{
          width: "100%",
          height: "100%",
          overflowY: "auto",
          objectFit: "cover",
        }}
      ></iframe>
      <div className="flex justify-between mt-2 ml-1">
        <AnimatedButtonWrapper>
          <button
            onClick={onCloseModal}
            className="px-4 py-[12px]  font-bold text-white bg-red rounded-md"
          >
            Close
          </button>
        </AnimatedButtonWrapper>
      </div>
    </div>
  );
}

export default ForgetPinForm;
