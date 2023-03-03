import { useEffect, useState } from 'react';
import { MentorCard } from '~/components/mentor';
import { FilterSection, SectionTitle } from '~/components/ui';
import { Fields, Offers, User } from '~/lib/types/user';
import { UserService } from '~/services';

const SearchPage = () => {
  const [mentors, setMentors] = useState<User<'Mentor'>[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [shouldStopObserving, setShouldStopObserving] = useState(false);
  const [page, setPage] = useState(0);
  const [filteringOption, setFilteringOption] = useState<{
    fields: Fields[];
    offers: Offers[];
  }>({ fields: [] as Fields[], offers: [] as Offers[] });

  const observer = new IntersectionObserver(
    entries => {
      // When last card is on 100% screen
      const lastCard = entries[0]!;
      if (lastCard.isIntersecting) {
        // waiting for 1s to load data => isLoading = true
        setIsLoading(true);

        // After loaded data => isLoading = false
        setTimeout(async () => {
          setPage(page + 1);
          const response = await UserService.getMentors({
            itemsPerPage: 4,
            page: page + 1,
            ...filteringOption,
          });
          const newMentors = response.data.data;
          if (newMentors.length !== 0) {
            setMentors([...mentors, ...newMentors]);
          } else setShouldStopObserving(true);

          observer.unobserve(lastCard.target);
          setIsLoading(false);
        }, 1000);
      }
    },
    {
      threshold: 1,
    }
  );

  const fetchMentorsAfterFiltered = async () => {
    setPage(1);
    setShouldStopObserving(false);

    const response = await UserService.getMentors({
      itemsPerPage: 4,
      page: 1,
      ...filteringOption,
    });
    const newMentors = response.data.data;
    console.log(newMentors);
    console.log(filteringOption);
    console.log(page);

    setMentors(newMentors);
  };

  useEffect(() => {
    fetchMentorsAfterFiltered();
  }, [filteringOption]);

  useEffect(() => {
    if (mentors.length < 24 && !shouldStopObserving) {
      const container = document.getElementById('container');
      const cards = container!.children;
      const lastCard = cards[cards.length - 1];
      lastCard && observer.observe(lastCard!);
    }
  }, [mentors, shouldStopObserving, filteringOption]);

  return (
    <main className="container min-h-screen mx-auto px-12 pt-[121px]">
      <SectionTitle
        className="mb-4"
        content="Lựa chọn mentor phù hợp với bạn tại đây"
      />

      <div className="mb-16" />

      <FilterSection setFilteringOptions={setFilteringOption} />

      <div id="container" className="flex flex-row flex-wrap gap-y-4 py-6">
        {mentors.map((mentor, idx) => (
          <div key={idx} className="basis-1/2 lg:basis-1/4 px-2">
            <div className="flex justify-center items-center">
              <MentorCard mentor={mentor} />
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="basis-full flex justify-center">
            <svg
              className="animate-spin mt-8"
              width="179"
              height="179"
              viewBox="0 0 179 179"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M89.5 14.4167C48.0326 14.4167 14.4167 48.0326 14.4167 89.5C14.4167 130.967 48.0326 164.583 89.5 164.583C130.967 164.583 164.583 130.967 164.583 89.5C164.583 48.0326 130.967 14.4167 89.5 14.4167ZM0.416672 89.5C0.416672 40.3006 40.3006 0.416672 89.5 0.416672C138.699 0.416672 178.583 40.3006 178.583 89.5C178.583 138.699 138.699 178.583 89.5 178.583C40.3006 178.583 0.416672 138.699 0.416672 89.5Z"
                fill="white"
              />
              <mask
                id="mask0_1_14"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="179"
                height="179"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M89.0833 14C47.616 14 14 47.616 14 89.0833C14 130.551 47.616 164.167 89.0833 164.167C130.551 164.167 164.167 130.551 164.167 89.0833C164.167 47.616 130.551 14 89.0833 14ZM0 89.0833C0 39.884 39.884 0 89.0833 0C138.283 0 178.167 39.884 178.167 89.0833C178.167 138.283 138.283 178.167 89.0833 178.167C39.884 178.167 0 138.283 0 89.0833Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_1_14)">
                <path
                  d="M23.8333 89.5C23.8333 72.0841 30.7518 55.3815 43.0667 43.0667C55.3815 30.7518 72.0841 23.8333 89.5 23.8333V-9C35.1034 -9 -9 35.1034 -9 89.5H23.8333ZM40.25 132.93C29.6466 120.951 23.8055 105.498 23.8333 89.5H-9C-9 114.47 0.316459 137.305 15.625 154.658L40.25 132.93Z"
                  fill="#C5C5C5"
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </main>
  );
};
export default SearchPage;
