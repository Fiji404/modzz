import { Heading } from '../UI/Heading';
import { Tutorial } from './Tutorial';

const TUTORIALS_CONTENT = [
    {
        heading: 'Jak uniknąć usuwania pobranych plików',
        desc: 'Jeśli Twój system usuwa tobie pliki, które pobrałeś to tutaj znajdziesz rozwiązanie',
        content: [
            { text: '1. Klikamy w lupę na pasku zadań', img: '/TutorialDefender/desktop.png' },
            {
                text: '2. Wpisujemy podaną frazę: Wyklucz foldery z indeksowania',
                img: '/TutorialDefender/search.png',
            },
            { text: '3. Klikamy na "Dodaj wykluczony folder"', img: '/TutorialDefender/defender.png' },
            { text: '4. Szukamy folderu który chcemy wykluczyć', img: '/TutorialDefender/find-folder.png' },
            { text: '5. Klikamy wybierz folder', img: '/TutorialDefender/pick-folder.png' },
            {
                text: '6. Sprawdzamy czy folder dodał się do listy i gotowe :)',
                img: '/TutorialDefender/check.png',
            },
        ],
        summary:
            'Takim sposobem unikniemy usuwania plików, nawet gdy nasz antywirus (Windows Defender) jest wyłączony. W razie dalszych problemów odwiedź naszego Discorda, klikając przycisk na dole',
        authors: ['Zxreia..'],
    },
    {
        heading: 'Dodanie strojów za pomocą XDEV - Kobieta',
        desc: 'Znajdziesz tutaj mnóstwo przykładowych strojów, które można wykonać za pomocą XDEV dla płci damskiej',
        content: [
            { text: '1.', img: '/XDEV/female/1.png' },
            { text: '2.', img: '/XDEV/female/2.png' },
            { text: '3.', img: '/XDEV/female/3.png' },
            { text: '4.', img: '/XDEV/female/4.png' },
            { text: '5.', img: '/XDEV/female/5.png' },
            { text: '6.', img: '/XDEV/female/6.png' },
            { text: '7.', img: '/XDEV/female/7.png' },
            { text: '8.', img: '/XDEV/female/8.png' },
            {
                text: '9. Wyjątek: strój zadziała, jeżeli posiadasz świąteczne ubrania.',
                img: '/XDEV/female/9.png',
            },
            { text: '10.', img: '/XDEV/female/10.png' },
            { text: '11.', img: '/XDEV/female/11.png' },
            { text: '12.', img: '/XDEV/female/12.png' },
            { text: '13.', img: '/XDEV/female/13.png' },
            { text: '14.', img: '/XDEV/female/14.png' },
            { text: '15.', img: '/XDEV/female/15.png' },
            { text: '16.', img: '/XDEV/female/16.png' },
        ],
        summary:
            'Na ten moment to wszystkie konfiguracje, natomiast lista będzie ciągle się powiekszać w miarę dodawanych strojów przez innych użytkowników. Tutaj znajdziesz aktualną listę ponieważ strona jest cały czas aktualizowana. W razie dalszych problemów wejdź na Discorda, klikając przycisk poniżej',
        authors: ['Zxreia..', 'idzoras'],
    },
    {
        heading: 'Dodanie strojów za pomocą XDEV - Mężczyzna',
        desc: 'Znajdziesz tutaj mnóstwo przykładowych strojów, które można wykonać za pomocą XDEV dla płci męskiej',
        content: [
            { text: '1.', img: '/XDEV/male/1.png' },
            { text: '2.', img: '/XDEV/male/2.png' },
            { text: '3.', img: '/XDEV/male/3.png' },
            { text: '4.', img: '/XDEV/male/4.png' },
            { text: '5.', img: '/XDEV/male/5.png' },
            { text: '6.', img: '/XDEV/male/6.png' },
            { text: '7.', img: '/XDEV/male/7.png' },
            { text: '8.', img: '/XDEV/male/8.png' },
            {
                text: '9. Wyjątek: strój zadziała, jeżeli posiadasz świąteczne ubrania.',
                img: '/XDEV/male/9.png',
            },
            { text: '10.', img: '/XDEV/male/10.png' },
            { text: '11.', img: '/XDEV/male/11.png' },
            { text: '12.', img: '/XDEV/male/12.png' },
            { text: '13.', img: '/XDEV/male/13.png' },
            { text: '14.', img: '/XDEV/male/14.png' },
            { text: '15.', img: '/XDEV/male/15.png' },
            { text: '16.', img: '/XDEV/male/16.png' },
            { text: '17.', img: '/XDEV/male/17.png' },
            { text: '18.', img: '/XDEV/male/18.png' },
            { text: '19.', img: '/XDEV/male/19.png' },
            { text: '20.', img: '/XDEV/male/20.png' },
            { text: '21.', img: '/XDEV/male/21.png' },
            { text: '22.', img: '/XDEV/male/22.png' },
            { text: '23.', img: '/XDEV/male/23.png' },
            { text: '24.', img: '/XDEV/male/24.png' },
            { text: '25.', img: '/XDEV/male/25.png' },
            { text: '26.', img: '/XDEV/male/26.png' },
            { text: '27.', img: '/XDEV/male/27.png' },
            { text: '28.', img: '/XDEV/male/28.png' },
            { text: '29.', img: '/XDEV/male/29.png' },
            { text: '30.', img: '/XDEV/male/30.png' },
            { text: '31.', img: '/XDEV/male/31.png' },
            { text: '32.', img: '/XDEV/male/32.png' },
            { text: '33.', img: '/XDEV/male/33.png' },
            { text: '34.', img: '/XDEV/male/34.png' },
            { text: '35.', img: '/XDEV/male/35.png' },
            { text: '36.', img: '/XDEV/male/36.png' },
            { text: '37.', img: '/XDEV/male/37.png' },
            { text: '38.', img: '/XDEV/male/38.png' },
            { text: '39.', img: '/XDEV/male/39.png' },
            { text: '40.', img: '/XDEV/male/40.png' },
            { text: '41.', img: '/XDEV/male/41.png' },
            { text: '42.', img: '/XDEV/male/42.png' },
            { text: '43.', img: '/XDEV/male/43.png' },
            { text: '44.', img: '/XDEV/male/44.png' },
            { text: '45.', img: '/XDEV/male/45.png' },
        ],
        summary:
            'Na ten moment to wszystkie konfiguracje, natomiast lista będzie ciągle się powiekszać w miarę dodawanych strojów przez innych użytkowników. Tutaj znajdziesz aktualną listę ponieważ strona jest cały czas aktualizowana. W razie dalszych problemów wejdź na Discorda, klikając przycisk poniżej',
        authors: ['Zxreia..'],
    },
];

export const Tutorials = () => {
    return (
        <main className="mx-auto max-w-[1600px] py-6">
            <header>
                <Heading>Poradniki</Heading>
                <p className="hide mx-auto mt-1 max-w-[620px] text-center text-[#7a7a7a]">
                    Masz problem z menu, grą, nie wiesz dlaczego coś nie działa? Spokojnie na tej stronie znajdziesz
                    wszystkie poradniki, które wyjaśnią Ci krok po kroku jak rozwiązać Twój problem.
                </p>
            </header>
            <ul className="mt-5 flex gap-4">
                {TUTORIALS_CONTENT.map((content, i) => (
                    <Tutorial key={content.heading} i={i} {...content} />
                ))}
            </ul>
        </main>
    );
};
