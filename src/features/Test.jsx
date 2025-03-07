import ActionButton from "@/ui/buttons/ActionButton";
import Button from "@/ui/buttons/Button";
import Choose from "@/ui/textField/Choose";
import PageTitle from "@/ui/PageTitle";
import Spinner from "@/ui/spinner/Spinner";
import Input from "@/ui/textField/Input";
import TextArea from "@/ui/textField/TextArea";
import { Controller, useForm } from "react-hook-form";

import { useTranslation } from "react-i18next";
import { FaAppStoreIos } from "react-icons/fa";
import ScrollToTopButtons from "@/ui/buttons/ScrollToTopButtons";
import Modal from "@/ui/modal/Modal";
import ConfirmMessage from "@/ui/modal/ConfirmMessage";
import ModalBody from "@/ui/modal/ModalBody";
import TestingTable from "./TestingTable";
import TabsLayout from "./TabsLayout";
import Information from "@/ui/Information";
import HighlightMessage from "@/ui/HighlightMessage";
import { MdAddCircle, MdWarning } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import PageUnderConstruction from "@/ui/PageUnderConstruction";
import Accordion from "@/ui/Accordion";
import Card from "@/ui/Card";
import BackButton from "@/ui/buttons/BackButton";
import DarkModeButton from "@/ui/DarkModeButton";
import TranslateButton from "@/ui/TranslationButton";

const string = "he llo ";

const Test = () => {
  const { t } = useTranslation();
  function handleDeleteAnnouncement() {
    console.log("totos");
  }

  console.log(string.trimStart());

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      identityNo: "",
      academicNo: "",
      sectionId: "",
      katkot: null,
    },
    mode: "onChange",
  });

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="container my-10">
      <DarkModeButton />
      <TranslateButton />
      <h1 className="text-black dark:bg-black dark:text-yellow-300">totos</h1>
      <PageTitle title={t("general.pageNotFound")} />

      <div className="print:hidden">totos</div>

      {/* <div>
        <RiErrorWarningFill />
        <span className="sr-only">settings</span>
      </div> */}

      <BackButton />

      <div className="mx-auto mb-10 w-full sm:w-[350px]">
        <Card>
          <Card.Header hasImage>
            <img src="https://i.ibb.co/bBqQRbR/gallery5.webp" alt="gallery5" />
          </Card.Header>
          <Card.Body hasHeader hasFooter>
            <p>al wala wala aho al wala totos aho</p>
          </Card.Body>
          <Card.Footer>
            <p>eh hntyro</p>
          </Card.Footer>
        </Card>
      </div>

      <div>
        <Accordion title="What is React?" defaultOpen>
          React is a JavaScript library for building user interfaces. It allows
          developers to create reusable UI components.
        </Accordion>
        <Accordion title="What is Tailwind CSS?">
          Tailwind CSS is a utility-first CSS framework for creating custom
          designs without leaving your HTML.
        </Accordion>
        <Accordion title="How to use this accordion?">
          Pass the title as a prop and include your content as children.
          Customize it by adding additional styles via props.
        </Accordion>
      </div>

      <div className="mb-8 space-y-4">
        <PageUnderConstruction />
        <HighlightMessage
          severity="warning"
          showSeverity={false}
          Variant="filled"
        >
          <p>
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
          </p>
        </HighlightMessage>

        <HighlightMessage severity="warning" Variant="outline">
          <p>{t("general.arabic")}</p>
        </HighlightMessage>

        <HighlightMessage severity="info" Variant="filled">
          <p>
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
          </p>
        </HighlightMessage>

        <HighlightMessage severity="info" Variant="outline">
          <p>
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
            {t("general.arabic")} {t("general.arabic")} {t("general.arabic")}
          </p>
        </HighlightMessage>
      </div>

      {/* <div>{t("dashboard.dashboard")}</div> */}
      <div className="space-y-10">
        <Input
          placeholder="first test"
          label="first test"
          variation="filled"
          disabled={true}
          // error="totos"
          Icon={<FaAppStoreIos />}
        />
        <Input
          placeholder="second test"
          label="second test"
          variation="outline"
          // disabled={true}
          // error="totos"
          Icon={<FaAppStoreIos />}
        />

        <Input
          placeholder="third test"
          label="third test"
          variation="standard"
          // disabled={true}
          // error="totos"
          Icon={<FaAppStoreIos />}
        />

        <Input
          placeholder="fifth test"
          label="fifth test"
          type="password"
          // error={"totos"}
        />
        <Input
          placeholder="sixth test"
          label="sixth test"
          type="file"
          // disabled={true}
          error={"totos"}
        />

        <Button>
          <MdAddCircle />
          <p>{t("general.pageNotFound")}</p>
        </Button>
        <Button variation="secondary" loading>
          nasr
        </Button>
        <Button variation="delete">mickey</Button>
        <Button variation="danger">kamel</Button>

        <Button To="/tatos">testo</Button>

        <ActionButton icon="add" />

        <TextArea
          placeholder="test one"
          label="test one"
          // disabled
        />
        <TextArea
          placeholder="test two"
          label="test two"
          variation="outline"
          // disabled
        />
        <TextArea
          placeholder="test three"
          label="test three"
          variation="standard"
          // disabled
        />

        <Spinner size="lg" />
      </div>
      {/* SCROLL TO TOP BUTTON */}
      {/* <ScrollToTopButtons /> */}

      {/* MODAL */}
      <Modal>
        <Modal.Open opens="testingModal">
          <Button variation="secondary">Testing Modal</Button>
        </Modal.Open>

        <Modal.Window name="testingModal">
          <ModalBody onSubmit={handleSubmit(onSubmit)}>
            <ModalBody.Header title={t("general.underConstructions")} />

            <ModalBody.Body>
              <Controller
                name="katkot"
                control={control}
                rules={{ required: "this field is required" }}
                render={({ field }) => (
                  <Choose
                    field={field}
                    options={[
                      { label: "totos", value: 1 },
                      { label: "nasr", value: 2 },
                    ]}
                    label={t("general.english")}
                    error={errors?.katkot?.message}
                  />
                )}
              />

              <Input
                placeholder="identityNo"
                label={t("general.arabic")}
                register={register("identityNo", {
                  required: "this field is required",
                })}
                error={errors?.identityNo?.message}
              />
              <Input
                placeholder="academicNo"
                label={t("general.backToDashboard")}
                register={register("academicNo", {
                  required: "this field is required",
                })}
                error={errors?.academicNo?.message}
              />
              <Input
                placeholder="sectionId"
                label={t("general.pageNotFound")}
                register={register("sectionId", {
                  required: "this field is required",
                })}
                error={errors.sectionId?.message}
              />
            </ModalBody.Body>

            <ModalBody.Footer
              // isLoading={isWorking}
              onCancel={() => {
                console.log("hn2fl b2a");
              }}
              SubmitTitle={t("general.edit")}
              AriaLabel={t("studyGroups.editIdentityNum")}
            />
          </ModalBody>
        </Modal.Window>
      </Modal>

      {/* CONFIRM MESSAGE */}
      <Modal>
        <Modal.Open opens="deleteAnnouncement">
          <Button>test confirm message</Button>
        </Modal.Open>

        <Modal.Window name="deleteAnnouncement">
          <ConfirmMessage
            message={` هل أنت متأكد من أنك تر هل أنت متأكد من أنك تر هل أنت متأكد من أنك تر هل أنت متأكد من أنك تر هل أنت متأكد من أنك تر هل أنت متأكد من أنك تر هل أنت متأكد من أنك تر هل أنت متأكد من أنك تر هل أنت متأكد من أنك تريد حدف ذلك`}
            onConfirm={handleDeleteAnnouncement}
          />
        </Modal.Window>
      </Modal>

      <TestingTable />

      <TabsLayout />

      <Information
        head={t("general.arabic")}
        info={t("general.pageNotFound")}
      />
    </div>
  );
};

export default Test;
