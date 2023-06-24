import { UserRole } from '~/lib/types/user';
import { FIELD_METADATA, OFFER_METADATA, USER_ROLE } from '~/shared/constant';
import FormikInput from '~/components/ui/Input';
import FormikSelect from '~/components/ui/Select';

import { Popover } from 'antd';
import { Field, FormikHelpers } from 'formik';

type EmptyRecord = Record<string, never>;

export const Step0InputPack = ({
  setFieldValue,
}: {
  setFieldValue: FormikHelpers<EmptyRecord>['setFieldValue'];
}) => (
  <>
    <Field name="name" as={FormikInput} />
    <Field
      className="border-gray-400"
      name="gender"
      options={[
        {
          value: 'male',
          label: 'Male',
        },
        {
          value: 'female',
          label: 'Female',
        },
      ]}
      onChange={(value: string) => setFieldValue('gender', value)}
      as={FormikSelect}
    />
    <Field
      name="description"
      type="text-area"
      rows={4}
      autoSize={{ minRows: 4, maxRows: 7 }}
      as={FormikInput}
    />
  </>
);

export const Step1InputPack = () => (
  <>
    <Field
      name="schoolName"
      label="Tên trường học"
      tooltipText="Mentor có thể là tiền bối của bạn đấy!"
      as={FormikInput}
    />
    <Field name="major" label="Chuyên ngành" as={FormikInput} />
    <Field
      name="title"
      label="Công việc hiện tại"
      placeholder="Sinh viên, Software engineer, etc."
      as={FormikInput}
    />
    <Field
      name="workplace"
      label="Nơi làm việc"
      placeholder="PIF Network, etc."
      as={FormikInput}
    />
  </>
);

export const MentorInputPack = ({
  setFieldValue,
}: {
  setFieldValue: FormikHelpers<EmptyRecord>['setFieldValue'];
}) => (
  <>
    <Field
      className="border-gray-400"
      name="fields"
      options={Object.entries(FIELD_METADATA).map(([key, data]) => ({
        value: key,
        label: data.displayName,
      }))}
      mode="multiple"
      maxTagCount="responsive"
      onChange={(value: string) => setFieldValue('fields', value)}
      as={FormikSelect}
    />
    <Field
      className="border-gray-400"
      name="offers"
      options={Object.entries(OFFER_METADATA).map(([key, data]) => ({
        value: key,
        label: data.displayName,
      }))}
      mode="multiple"
      maxTagCount="responsive"
      onChange={(value: string) => setFieldValue('offers', value)}
      as={FormikSelect}
    />
    <Field name="bookingUrl" label="Booking url" as={FormikInput} />
  </>
);

export const Step2InputPack = () => (
  <>
    <Field
      name="location"
      label="Thành phố của bạn"
      tooltipText="Thêm sự kết nối, thêm chủ đề để trò chuyên, vẹn cả đôi bên!"
      as={FormikInput}
    />
    <Field
      name="github"
      label="GitHub"
      placeholder="https://github.com/shecodesvietnam"
      as={FormikInput}
    />
    <Field
      name="linkedin"
      label="LinkedIn"
      placeholder="https://linkedin.com/company/shecodesvietnam"
      as={FormikInput}
    />
  </>
);
