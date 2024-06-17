const ImageGal = () => {
    const Images = [
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihYHaRuVtC-trzb3IM7A1qyQQlN6U0OoJD4B3QDB6nm4sKTUDlzyPpaniGaknNV11HEstp0wj2BGLZ8szypOVNgFhplBkv7seg0=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpiha3yPvWQ3Qe1WTs2Fy3ztRpGYH30Z8dZHjz4Z6epbGYGY2j0wbK84kuCyCk3f2nO0VokuXk11sDyZNKtuN45tL62mLUwVPjyEU=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihZuLYRih5n0C-kuKwt0juQHRl4QbC3hZ6TF5ILCSEGNECyqXwQKC16_IgsJ3RqiqpAGgFmXjz4Lin8Lifg86q2bQb5Kth1x1Q=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihYCcc4UJmLBpl_SI8qQdDemvk7nkRantNEm-uoeq-AlLSzNJsKceBngBo7Gd8SAzcsGizkm8dEHsnFdEfNE9K37yyJlXg-efw=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihYmlRLz49QrczshGjB5i9X-ccRFZk7Fia5tFNCcLgEwpMkBPukW2hOcdBdiRflqDOo4wQE-xwtT0m4dWRWvf8-yX6IXZQOaphw=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihYkafCWWDve5Kwy26cSG-TcXOe310y34OOCarPhRSJY0jsduKkYb6h-wJ8N2hSxT99HP2ubuFIDwU4rrQ3PpZ_IPP4h3X52ow=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihbMJdEp5ch5FAibNhVQ7VltQjfZkq_SmuFFr5VEk6JNxBm7i0Z9lPaLwWfcFtgZ6tm2qSFJM22tMGRjsWvIIrWLvN2cjKXYDE8=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihaKslCm-yQQ7obR9zHT0v5gigSu4bh0SEvcma4gemb6M2IW2mbXjvJ72I5uZYR4CRx92SQUcatsxDW6vi8yHudlAmuYQ9lRcY4=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpihYDjOFRiiCJh4CH_vs0__SHyac5BWjkvKL9QpTYgm9qyzKNOiqywqxi9PMwy9er6H4ya-myJR3ghBDwCeIoxOFnE93hP1OWBOA=s1600-rw-v1",
        "https://lh3.googleusercontent.com/drive-viewer/AKGpiham5gf-kt_SNpdbtaUFrbFayYD7K1LrBzaswy79jFU_6if8pg_idR5gZdePYARztjF3mWdhAaGAmVEEBxVdJS7V_OP6b6XRvw=s1600-rw-v1"
    ]

    return (
        <div className="w-full sm:w-3/5 text-black flex flex-col justify-center mt-7 sm:my-7">
            <div className="flex flex-col justify-center gap-6 items-center sm:flex-row">
                <h1 className="font-bold text-xl">My Leadership & Skills</h1>
                <p className="w-3/5">I've had my fair share of Leadership Qualities in my College days, such as by serving the College as a Prefect (2020) and help in Oraganizing its events as well as Oraganzing and Working as a Treasurer for the Colleges Aeronatical Society and its events.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-5">
                {Images.map((i, index) => (
                    <img key={index} src={i} alt={`Community event ${index + 1}`} className="h-48 w-full object-cover" />
                ))}
            </div>
        </div>
    );
}
 
export default ImageGal;