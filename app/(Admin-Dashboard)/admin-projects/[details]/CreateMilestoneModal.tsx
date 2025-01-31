'use client';

import { X } from 'lucide-react';
import { cn, formatPrice } from '@/utils/util';
import { useEffect, useState } from 'react';
import { ProjectCardProps } from '@/libs/projects';
import { PROJECT_MILESTONES, ProjectMilestoneProps } from './milestones';
import { useStateCtx } from '@/context/StateContext';
import WordCounter from '@/components/admin/card/WordCounter';

type StatusProps = {
  id?: number;
  label: string;
};
const STATUSES: StatusProps[] = [
  {
    id: 1,
    label: 'pending'
  },
  {
    id: 2,
    label: 'in-progress'
  },
  {
    id: 3,
    label: 'completed'
  }
];
type FormProps = {
  title: string;
  description: string;
  status: StatusProps['label'];
};

const CreateMilestoneModal = () => {
  const { createMilestoneModal, setCreateMilestoneModal } = useStateCtx();

  const [formData, setFormData] = useState<FormProps>({
    title: '',
    description: '',
    status: ''
  });

  // Maximum length for description
  const MAX_DESC = 160;

  const isDisabled =
    !formData.title || !formData.description || !formData.status;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCreateMilestoneModal(false);
  };

  useEffect(() => {
    const readLocal = localStorage.getItem('create-milestone');
    if (readLocal) {
      setFormData(JSON.parse(readLocal));
    }
  }, []);

  useEffect(() => {
    if (!(formData.title.length > 3)) return;

    localStorage.setItem('create-milestone', JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40 top-0 left-0  transition-all duration-300 z-[99] backdrop-blur-sm',
          createMilestoneModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setCreateMilestoneModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="make-payment"
        className={cn(
          'py-6   flex flex-col w-[98%] sm:w-[95%]  min-[500px]:h-[650px] md:h-[720px] lg:h-[750px] md:w-[682px]  justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ',
          createMilestoneModal
            ? '-translate-x-1/2 duration-700 opacity-100 sm:rounded-xl md:rounded-2xl'
            : 'translate-x-full duration-300 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="sm:text-lg md:text-2xl font-medium text-header">
            Create New Milestone
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => {
              window?.localStorage?.removeItem('create-milestone');
              setFormData({
                title: '',
                description: '',
                status: ''
              });
              setCreateMilestoneModal(false);
            }}
            className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-y-4 lg:gap-y-6 py-4 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start"
        >
          <div className="flex flex-col  gap-y-2 w-full">
            <label
              htmlFor="description"
              className="text-sm sm:text-base font-medium"
            >
              Milestone Title
            </label>
            <input
              type="text"
              placeholder="Milestone title..."
              id="milestone-title"
              name="title"
              className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
              value={formData.title}
              onChange={e =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col  gap-y-2 w-full">
            <label
              htmlFor="description"
              className="text-sm sm:text-base font-medium"
            >
              Add Description
            </label>
            <textarea
              placeholder="Milestone description..."
              id="description"
              name="description"
              maxLength={MAX_DESC}
              className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light h-[150px] sm:h-[185px] resize-none sidebar-scroll text-sm sm:text-base"
              value={formData.description}
              onChange={e =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
            <WordCounter word={formData.description} length={MAX_DESC} />
          </div>

          <div className="flex  xl:pt-2 items-start flex-col gap-y-4">
            <p className="text-center  font-medium">Select Status</p>
            <div className="flex md:flex-col gap-4 flex-wrap mb-2">
              {STATUSES.map(status => (
                <p
                  key={status.id}
                  className={cn(
                    'text-center text-sm md:text-base flex items-center gap-x-2 transition-all duration-300',
                    {
                      ' font-medium': status.label === formData.status,
                      'text-[#eea300] ': status.label === 'in-progress',
                      'text-[#008d36] ': status.label === 'completed',
                      'text-primary-light ': status.label === 'pending'
                    }
                  )}
                >
                  <button
                    onClick={() =>
                      setFormData({ ...formData, status: status.label })
                    }
                    type="button"
                    className={cn(
                      'w-6 h-6 rounded-full border-primary border flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light',
                      {
                        ' p-1': status.label === formData.status
                      }
                    )}
                  >
                    {formData.status === status.label && (
                      <span className="bg-primary h-full w-full rounded-full" />
                    )}
                  </button>
                  <span className="capitalize">{status.label} </span>
                </p>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-end items-center gap-x-2 sm:gap-x-3 md:gap-x-6">
            <button
              type="submit"
              tabIndex={0}
              aria-label="Remove"
              disabled={isDisabled}
              className={cn(
                'rounded-lg bg-primary-light text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light'
              )}
            >
              Create Milestone
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateMilestoneModal;
