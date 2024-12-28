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
      <div className="flex justify-between mt-4 ml-1">
        <AnimatedButtonWrapper>
          <button
            onClick={onCloseModal}
            className="btn-search text-white rounded-md bg-red hover:bg-[#882111] shadow-none hover:shadow-none px-[16px] py-[10px] w-[100px] font-primary text-[14px] font-normal"
          >
            <p>Kapat</p>
          </button>
        </AnimatedButtonWrapper>
      </div>
    </div>
  );
}

export default ForgetPinForm;
