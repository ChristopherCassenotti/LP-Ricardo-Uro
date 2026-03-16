export default function PartnersSection() {

    const partners = [
        { src: "/bo.png", alt: "Parceiro 1" },
        { src: "/bo.png", alt: "Parceiro 2" },
        { src: "/bo.png", alt: "Parceiro 3" },
        { src: "/bo.png", alt: "Parceiro 4" },
        { src: "/bo.png", alt: "Parceiro 5" },
        { src: "/bo.png", alt: "Parceiro 6" },
    ];
    
    return (
        <section className="w-full px-10 md:px-20 flex flex-col items-center text-center">
            <div className="h-0.5 w-full bg-line-gradient opacity-50 mt-10" />
            <header className="mb-6">
                <p className="mb-3 text-md text-[#008F3C] font-medium uppercase tracking-widest text-primary">
                    Quem somos
                </p>

                <h2
                    id="sobre-titulo"
                    className="font-display text-3xl font-bold md:text-5xl"
                >
                    Empresas que confiam na{" "}
                    <span className="gradient-text">Green Whaser</span>
                </h2>
            </header>

            <div className="h-0.5 w-full bg-line-gradient opacity-50 mt-10" />
        </section>
    )
}