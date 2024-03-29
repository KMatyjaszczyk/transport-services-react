import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'pl',
        resources: {
            en: {
                translation: {
                    transport_services: "Transport services"
                    , reservations: "Reservations"
                    , about: "About"
                    , login: "Login"
                    , logout: "Logout"
                    , john_kowalsky: "John Kowalsky"
                    , journeys: "Journeys"
                    , weddings: "Weddings"
                    , occasional_trips: "Occasional trips"
                    , about_section1_header: "Complex transport services"
                    , about_section1_lead: "We offer services in passenger transport sector in Poland"
                    , about_section1_text: "With us you will plan your wedding or unforgetable trip in any place of the country. Because of us integrative or school trip will not be a difficult challenge. We will support people arrival on your loved person's funeral."
                    , about_section2_header: "30 years of experience"
                    , about_section2_lead: "Our services give satisfaction to our customers for over three decades"
                    , about_section2_text1: "Beginning of ensuring transport connections on the area of Niedźwiada commune and town of Lubartów, we had been carrying our activity on bigger area. During our's company development, we had been spreading offer for new services."
                    , about_section2_text2: "Today we work in many sectors of passenger transport. Offering both regular communication lines, individual orders and cooperation with enterprices."
                    , about_section3_header: "Professionalism"
                    , about_section3_lead: "Experienced drivers is the basis"
                    , about_section3_text1: "Our employees are highly qualificated drivers with many years of experience in transport sector."
                    , about_section3_text2: "We are characterized by high level of personal culture, ensuring nice and professional atmosphere during journey."
                    , about_section3_text3: "In our company we believe in the rule, that satisfied  customer is our best advertisement."
                    , about_offer_header: "Offer"
                    , about_offer_lead: "Vehicle fleet well suited to your needs"
                    , about_offer_text: "We have a wide choice of vehicles, depending of number of passengers and customer's individual preferences."
                    , vehicle_seats: "seats"
                    , login_signIn: "Sign in"
                    , login_email: "Email"
                    , login_password: "Password"
                    , login_login: "Login"
                    , login_signUp: "Sign up"
                    , register_header: "Sign up"
                    , register_email: "Email"
                    , register_password: "Password"
                    , register_password_repeat: "Repeat password"
                    , register_register: "Register"
                    , register_signIn: "Sign in"
                    , reservationPanel_yourReservations: "Your reservations"
                    , reservationPanel_noReservations: "You have no reservations"
                    , reservationPanel_createReservation: "Create reservation"
                    , reservations_bookingPerson: "Booking person"
                    , reservations_destination: "Destination"
                    , reservations_departureDate: "Departure date"
                    , reservations_vehicle: "Vehicle"
                    , reservations_status: "Status"
                    , createReservationModal_title: "Create reservation"
                    , createReservationModal_nameLabel: "Customer or company name"
                    , createReservationModal_namePlaceholder: "Name"
                    , createReservationModal_vehicleLabel: "Vehicle"
                    , createReservationModal_destinationLabel: "Journey destination"
                    , createReservationModal_destinationPlaceholder: "Destination"
                    , createReservationModal_journeyTypeLabel: "Journey type"
                    , createReservationModal_journeyTypeWedding: "Wedding"
                    , createReservationModal_journeyTypeFuneral: "Funeral"
                    , createReservationModal_journeyTypeTrip: "Trip"
                    , createReservationModal_journeyTypePilgrimage: "Pilgrimage"
                    , createReservationModal_journeyTypeOther: "Other"
                    , createReservationModal_departureDateLabel: "Departure date"
                    , createReservationModal_hourLabel: "Hour"
                    , createReservationModal_cancel: "Cancel"
                    , createReservationModal_create: "Create"
                    , updateReservationModal_title: "Update reservation"
                    , updateReservationModal_update: "Update"
                    , toast_createReservation_created: "Reservation created"
                    , toast_updateReservation_updated: "Reservation updated"
                    , toast_cancelReservation: "Reservation cancelled"
                    , toast_deleteReservation: "Reservation deleted"
                    , toast_userNotLoggedIn: "User is not logged in"
                    , toast_unknownError: "Unknown error"
                    , toast_modifyReservation_wrongCustomerName: "Wrong customer name. "
                    , toast_modifyReservation_wrongDestination: "Wrong destination. "
                    , toast_modifyReservation_wrongDateFromThePast: "Cannot create reservation for the past. "
                    , toast_register_registered: "User successfully registered"
                    , toast_register_wrongEmail: "Wrong email address. "
                    , toast_register_passwordTooShort: "Password is too short. "
                    , toast_register_passwordDoesNotRepeat: "Password does not match the repeated. "
                    , toast_login_userLoggedIn: "User logged in"
                    , toast_login_userLoggedOut: "User logged out"
                }
            },
            pl: {
                translation: {
                    transport_services: "Usługi transportowe"
                    , reservations: "Rezerwacje"
                    , about: "O firmie"
                    , login: "Zaloguj"
                    , logout: "Wyloguj"
                    , john_kowalsky: "Jan Kowalski"
                    , journeys: "Wycieczki"
                    , weddings: "Wesela"
                    , occasional_trips: "Wyjazdy okolicznościowe"
                    , about_section1_header: "Kompleksowe usługi transportowe"
                    , about_section1_lead: "Oferujemy usługi przewozu osób na terenie Polski"
                    , about_section1_text: "Z nami zaplanujesz wesele lub niezapomnianą podróż w dowolne miejsce w kraju. Dzięki nam integracyjna wycieczka szkolna nie będzie wyzwaniem. Pomożemy dotrzec ludziom na pogrzeb twojej bliskiej osoby."
                    , about_section2_header: "30 lat doświadczenia"
                    , about_section2_lead: "Nasze usługi dają satysfakcję naszym klientom od ponad trzech dekad"
                    , about_section2_text1: "Zaczynając od zapewnienia połączeń autobusowych na obszarze Gminy Niedźwiada i Miasta Lubartów, poszerzaliśmy zasięg naszych działań. W ramach rozwoju naszej firmy, poszerzaliśmy ofertę o nowe usługi."
                    , about_section2_text2: "Dzisiaj działamy w wielu dziedzinach przewozu osób. Zapewniamy regularne połączenia komunikacyjne, zamówienia indywidualne oraz współpracę z przedsiębiorstwami."
                    , about_section3_header: "Profesjonalizm"
                    , about_section3_lead: "Doświadczeni kierowcy to podstawa"
                    , about_section3_text1: "Nasi pracownicy to wysoce wykwalifikowani kierowcy z wieloma latami doświaczenia w branży transportowej."
                    , about_section3_text2: "Charakteryzuje nas wysoki poziom kultury osobistej, zapewniając miłą i profesjonalną atmosferę w trakcie podróży."
                    , about_section3_text3: "W naszej firmie wierzymy w zasadę, że zadowolony klient jest najlepszą reklamą."
                    , about_offer_header: "Oferta"
                    , about_offer_lead: "Flota pojazdów dopasowana do twoich potrzeb"
                    , about_offer_text: "Mamy szeroki wybór pojazdów, w zależności od liczby pasażerów i indywidualnych potrzeb klienta."
                    , vehicle_seats: "miejsc"
                    , login_signIn: "Logowanie"
                    , login_email: "Email"
                    , login_password: "Hasło"
                    , login_login: "Zaloguj"
                    , login_signUp: "Rejestracja"
                    , register_header: "Rejestracja"
                    , register_email: "Email"
                    , register_password: "Hasło"
                    , register_password_repeat: "Powtórz hasło"
                    , register_register: "Zarejestruj"
                    , register_signIn: "Logowanie"
                    , reservationPanel_yourReservations: "Twoje rezerwacje"
                    , reservationPanel_noReservations: "Nie masz żadnych rezerwacji"
                    , reservationPanel_createReservation: "Utwórz rezerwację"
                    , reservations_bookingPerson: "Zamawiający"
                    , reservations_destination: "Cel podróży"
                    , reservations_departureDate: "Data wyjazdu"
                    , reservations_vehicle: "Pojazd"
                    , reservations_status: "Status"
                    , createReservationModal_title: "Utwórz rezerwację"
                    , createReservationModal_nameLabel: "Nazwa klienta lub firmy"
                    , createReservationModal_namePlaceholder: "Nazwa"
                    , createReservationModal_vehicleLabel: "Pojazd"
                    , createReservationModal_destinationLabel: "Miejsce docelowe"
                    , createReservationModal_destinationPlaceholder: "Cel podróży"
                    , createReservationModal_journeyTypeLabel: "Typ wyjazdu"
                    , createReservationModal_journeyTypeWedding: "Wesele"
                    , createReservationModal_journeyTypeFuneral: "Pogrzeb"
                    , createReservationModal_journeyTypeTrip: "Wycieczka"
                    , createReservationModal_journeyTypePilgrimage: "Pielgrzymka"
                    , createReservationModal_journeyTypeOther: "Inny"
                    , createReservationModal_departureDateLabel: "Data wyjazdu"
                    , createReservationModal_hourLabel: "Godzina"
                    , createReservationModal_cancel: "Anuluj"
                    , createReservationModal_create: "Utwórz"
                    , updateReservationModal_title: "Aktualizuj rezerwację"
                    , updateReservationModal_update: "Aktualizuj"
                    , toast_createReservation_created: "Utworzono rezerwację"
                    , toast_updateReservation_updated: "Zaktualizowano rezerwację"
                    , toast_cancelReservation: "Anulowano rezerwację"
                    , toast_deleteReservation: "Usunięto rezerwację"
                    , toast_userNotLoggedIn: "Użytkownik nie jest zalogowany"
                    , toast_unknownError: "Nieznany błąd"
                    , toast_modifyReservation_wrongCustomerName: "Niewłaściwa nazwa klienta. "
                    , toast_modifyReservation_wrongDestination: "Niewłaściwy cel podróży. "
                    , toast_modifyReservation_wrongDateFromThePast: "Nie można utworzyć rezerwacji w przeszłości. "
                    , toast_register_registered: "Zarejestrowano użytkownika"
                    , toast_register_wrongEmail: "Niepoprawny adres email. "
                    , toast_register_passwordTooShort: "Hasło jest za krótkie. "
                    , toast_register_passwordDoesNotRepeat: "Hasła różnią się od siebie. "
                    , toast_login_userLoggedIn: "Zalogowano użytkownika"
                    , toast_login_userLoggedOut: "Wylogowano użytkownika"
                }
            }
        }
    })