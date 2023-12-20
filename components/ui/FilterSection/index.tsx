'use client';

import { useEffect, useState } from 'react';
import { Select } from 'antd';
import { Fields, Offers } from '~/lib/types/user';
import { FIELD_METADATA, OFFER_METADATA } from '~/shared/constant';
import { Tag } from '~/components/ui';

interface Props {
  setFilteringOptions: (...args: any) => any;
}

const FilterSection = ({ setFilteringOptions }: Props) => {
  const [fields, setFields] = useState<Fields[]>([]);
  const [offers, setOffers] = useState<Offers[]>([]);

  const handleOfferSelection = (value: Offers) => {
    setOffers([...offers, value]);
  };
  const handleOfferDeselection = (value: Offers) => {
    setOffers(offers.filter(select => select !== value));
  };

  const handleFieldSelection = (value: Fields) => {
    setFields([...fields, value]);
  };
  const handleFieldDeletion = (value: Fields) => {
    setFields(fields.filter(select => select !== value));
  };

  useEffect(() => {
    setFilteringOptions({ fields, offers });
  }, [fields, offers]);

  return (
    <div>
      <div className="flex justify-start gap-4">
        <div className="w-[300px]">
          <Select
            value={fields}
            className="w-full"
            showSearch
            placeholder="Ấn vào đây"
            optionFilterProp="label"
            filterOption={(input, option) =>
              (option?.value ?? '')
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            options={Object.entries(FIELD_METADATA).map(([key, data]) => ({
              value: key,
              label: data.displayName,
            }))}
            onSelect={handleFieldSelection}
            onDeselect={handleFieldDeletion}
            mode="tags"
            maxTagCount={0}
          />
          <div className="mt-3">
            {fields.map(field => {
              return (
                <div key={field} className="inline-flex m-1.5">
                  <Tag
                    type="outlined"
                    color={FIELD_METADATA[field]['tagColour']}
                    deletable
                    onDelete={() => {
                      handleFieldDeletion(field);
                    }}
                  >
                    {FIELD_METADATA[field]['displayName']}
                  </Tag>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[300px]">
          <Select
            value={offers}
            className="w-full"
            showSearch
            placeholder="Ấn vào đây"
            optionFilterProp="label"
            filterOption={(input, option) =>
              (option?.value ?? '')
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            options={Object.entries(OFFER_METADATA).map(([key, data]) => ({
              value: key,
              label: data.displayName,
            }))}
            onSelect={handleOfferSelection}
            onDeselect={handleOfferDeselection}
            mode="tags"
            maxTagCount={0}
          />
          <div className="mt-3">
            {offers.map(offer => {
              return (
                <div key={offer} className="inline-flex m-0.5">
                  <Tag
                    type="filled"
                    color={OFFER_METADATA[offer]['tagColour']}
                    deletable
                    onDelete={() => {
                      handleOfferDeselection(offer);
                    }}
                  >
                    {OFFER_METADATA[offer]['displayName']}
                  </Tag>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
