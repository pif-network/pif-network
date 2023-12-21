import { Dropdown, Menu } from 'antd';
import { Field, Form, FormikProvider, useFormik } from 'formik';
import { Avatar, Input as FormikInput } from '~/components/ui';

import { User } from '~/lib/types/user';
import { Cross2Icon, DotsHorizontalIcon } from '@radix-ui/react-icons';

export interface Review {
  mentorId: string;
  content?: string;
}

type FormProps = {
  initialValues?: Review;
  onClose: () => void;
  onSubmit: (value: Review) => void;
};

const boxShadowStyle =
  'shadow-[67px_155px_101px_rgba(0,0,0,0.01),30px_69px_75px_rgba(0,0,0,0.02),7px_17px_41px_rgba(0,0,0,0.02),0px_0px_0px_rgba(0,0,0,0.02)]';

const ReviewForm: React.FC<FormProps> = ({
  initialValues = { mentorId: '', content: '' },
  onSubmit,
  onClose,
}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div
      className={`px-5 py-3.5 md:px-8 md:py-6 bg-white col-span-2 rounded-3xl ${boxShadowStyle}`}
    >
      <div className="mb-3 flex justify-between">
        {/* TODO: handle populate reviewer info */}
        <div className="flex items-center">
          <Avatar />
          <div className="ml-2">
            <div className="flex items-center gap-2">
              <h2 className="text-body-md md:text-sub-heading font-semi-bold font-lora">
                Nguyễn Mai Anh
              </h2>
            </div>
            <span className="text-caption text-gray-600">Student, UEH.</span>
          </div>
        </div>
        <Cross2Icon className="cursor-pointer" onClick={onClose} />
      </div>

      <FormikProvider value={formik}>
        <Form>
          <Field
            className="p-0 pb-4 border-0 border-b hover:border-r-0 focus:border-r-0 !border-gray-200 focus:shadow-none"
            name="content"
            label="Review của bạn"
            type="text"
            placeholder="Leave a review"
            as={FormikInput}
          />
        </Form>
      </FormikProvider>

      <div className="text-right mt-3 text-gray-400 text-caption md:text-body-sm">
        Press enter to submit your review.
      </div>
    </div>
  );
};

export const CreateReview: React.FC<FormProps> = props => {
  return <ReviewForm {...props} />;
};

export const ReviewCard = (user: User<'Mentee'>) => (
  <div
    className={`px-5 py-3.5 md:px-8 md:py-6 bg-white col-span-2 rounded-3xl ${boxShadowStyle}`}
  >
    <div className="mb-3 flex justify-between">
      <div className="flex items-center">
        <Avatar />
        <div className="ml-2">
          <div className="flex items-center gap-2">
            <h2 className="text-body-md md:text-sub-heading text-primary-900 font-semi-bold font-lora word-[-6px]">
              {user.name}
            </h2>
            <span className="text-[#D9D9D9]">●</span>
            <span className="text-caption text-gray-600">yesterday</span>
          </div>
          <span className="text-caption text-gray-600">{`${user.title}, ${user.workplace}`}</span>
        </div>
      </div>
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu>
            <Menu.Item>Update review</Menu.Item>
            <Menu.Item>Delete review</Menu.Item>
          </Menu>
        }
      >
        <button className="h-9 w-9 rounded-[50%] hover:bg-gray-50">
          <DotsHorizontalIcon style={{ fontSize: '20px' }} />
        </button>
      </Dropdown>
    </div>
    <p className="text-caption md:text-body-md">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi laboriosam
      aspernatur ipsum doloribus perferendis doloremque totam autem qui, error
      animi illo eveniet quisquam ducimus.
    </p>
  </div>
);
