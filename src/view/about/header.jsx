import Forrest from "../../assets/forrest.jpg";

function Header() {
  return (
    <div className="w-full flex bg-green-800 h-[600px] text-white justify-center ">
      <div className="w-full h-full relative max-w-[2400px]">
        <img
          alt="forrest"
          src={Forrest}
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute w-full h-full top-0 bg-green-800 bg-opacity-60">
          <div className="w-1/2 h-full flex flex-col pl-40 justify-center">
            <div className="text-2xl font-bold mb-4">About us</div>
            <div className="max-w-[800px]">
              Phasellus nisl leo, fermentum ut molestie accumsan, tempor vel
              velit. Donec id tellus a mi facilisis dapibus eget ut justo.
              Curabitur lorem mauris, vestibulum sed tincidunt tincidunt,
              ullamcorper eget velit. Ut eget mauris sem. Vestibulum congue ut
              quam eget viverra. Nullam gravida volutpat ligula, quis consequat
              ipsum iaculis vitae. In tristique bibendum ex sollicitudin
              efficitur.
              <p className="mt-2">
                rabitur tristique, lectus eget congue finibus, odio elit
                ullamcorper nunc, ac venenatis mi ipsum varius leo. Ut ultricies
                libero vel lacus gravida, in lacinia felis dictum. Vestibulum
                accumsan nisl nibh, at pellentesque sem volutpat ac. Vestibulum
                sed nisl ut nisi bibendum tempor ut eu nisl. Etiam faucibus
                gravida nulla, a gravida odio congue et.
              </p>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
