import Image from "next/image";

function Footer () {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">

<div className="space-y-4 text-xs text-gray-800">
    <h5 className="font-bold">Community</h5>
    <p>Accessibility</p>
    <p>This is not a real site</p>
    <p>Its a pretty awesome clone</p>
    <p>Referrals accepted</p>
    <p>PPAPAFAM</p>
</div>

<div className="space-y-4 text-xs text-gray-800">
    <h5 className="font-bold">Host</h5>
    <p>PAPA react</p>
    <p>Presents</p>
    <p>Zero to full stack here</p>
    <p>Hubdreds of students</p>
    <p>Join now</p>
</div>

<div className="space-y-4 text-xs text-gray-800">
    <h5 className="font-bold">Support</h5>
    <p>Help center</p>
    <p>Trust & Safety</p>
    <p>Say hi youtube</p>
    <p>Easter Eggs</p>
    <p>For the win</p>
</div>

<div className="space-y-4 text-xs text-gray-800">
    <h5 className="font-bold">About</h5>
    <p>How airbnb works</p>
    <p>Newsroom</p>
    <p>Investors</p>
    <p>Airbnb plus</p>
    <p>Airbnb lux</p>
</div>

        </div>
    );
}

export default Footer